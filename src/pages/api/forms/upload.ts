// src/pages/api/forms/upload.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { formidable, File } from "formidable";
import nodemailer from "nodemailer";
import fs from "fs";

export const config = { api: { bodyParser: false } };

// your formId → email map
const DESTINATION_MAP: Record<string, string> = {
  "registration": "saabirscc@gmail.com",
  "register-dpo":        "dpo@dpa.gov.so",
  "cross-border":        "crossborder@dpa.gov.so",
  "breach-report":       "breaches@dpa.gov.so",
  "complaint":           "complaints@dpa.gov.so",
};

const DEFAULT_EMAIL = "info@dpa.gov.so";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    // parse multipart form
    const { fields, files } = await new Promise<{
      fields: Record<string, any>;
      files: Record<string, File | File[]>;
    }>((resolve, reject) => {
      const form = formidable({ multiples: false });
      form.parse(req, (err, fields, files) =>
        err ? reject(err) : resolve({ fields, files })
      );
    });

    const serviceId = String(fields.serviceId || "");
    console.log("📨 Received upload for serviceId:", serviceId);

    // pull out the file
    const raw = files.file;
    const uploaded: File = Array.isArray(raw) ? raw[0] : (raw as File);
    const tempPath = (uploaded as any).filepath || (uploaded as any).path;
    if (!tempPath) throw new Error("No temp path on uploaded file");

    const fileBuf = fs.readFileSync(tempPath);

    // choose where to send
    const to = DESTINATION_MAP[serviceId] || DEFAULT_EMAIL;
    console.log(`→ Routing to: ${to}`);

    // create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: Number(process.env.SMTP_PORT!) === 465,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    // verify SMTP connection config
    await transporter.verify();
    console.log("✔ SMTP connection OK");

    // send mail
    await transporter.sendMail({
      from: process.env.SMTP_USER,            // use your actual Gmail account here
      to,
      subject: `📝 New form submission – ${serviceId}`,
      text: `You have a new upload for service "${serviceId}". See attachment.`,
      attachments: [
        {
          filename: uploaded.originalFilename || "upload.dat",
          content: fileBuf,
        },
      ],
    });

    console.log("✔ Email sent");
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("❌ Error in /api/forms/upload:", err);
    return res.status(500).json({ success: false, error: err.message || "Unknown error" });
  }
}
