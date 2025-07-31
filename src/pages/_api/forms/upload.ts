import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import nodemailer from "nodemailer";
import fs from "fs";

// Disable Next.js default body parsing (we stream instead)
export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) throw err;

      const serviceId = String(fields.serviceId || "");
      const uploaded = files.file as File;

      if (!serviceId || !uploaded) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }

      /* read file from tmp location */
      const fileBuf = fs.readFileSync(uploaded.filepath);

      /* SMTP transporter */
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, // TLS if port 465
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      /* destination mailbox chosen by serviceId */
      const target = pickDpaEmail(serviceId);

      await transporter.sendMail({
        from: `"DPA Forms" <no-reply@dpa.gov.so>`,
        to: target,
        subject: `New form submission – ${serviceId}`,
        text: `A new form has been submitted for service "${serviceId}". See attachment.`,
        attachments: [
          {
            filename: uploaded.originalFilename || "form.pdf",
            content: fileBuf
          }
        ]
      });

      return res.status(200).json({ success: true });
    } catch (e: any) {
      console.error(e);
      return res.status(500).json({ success: false, error: e.message });
    }
  });
}

/* map serviceId -> DPA inbox */
function pickDpaEmail(serviceId: string) {
  switch (serviceId) {
    case "register-controller":
      return "registration@dpa.gov.so";
    case "register-dpo":
      return "dpo@dpa.gov.so";
    case "cross-border":
      return "crossborder@dpa.gov.so";
    case "breach-report":
      return "breaches@dpa.gov.so";
    case "complaint":
      return "complaints@dpa.gov.so";
    default:
      return "info@dpa.gov.so";
  }
}
