import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import nodemailer from "nodemailer";
import fs from "fs";

export const config = { api: { bodyParser: false } };

export async function POST(req: NextRequest) {
  const form = new formidable.IncomingForm();

  return new Promise((resolve) => {
    form.parse(req as any, async (err, fields, files) => {
      try {
        if (err) throw err;

        const serviceId = String(fields.serviceId || "");
        const uploaded: formidable.File = files.file as any;

        if (!serviceId || !uploaded) {
          return resolve(
            NextResponse.json(
              { success: false, error: "Bad request" },
              { status: 400 }
            )
          );
        }

        const buf = fs.readFileSync(uploaded.filepath);

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: '"DPA Forms" <no-reply@dpa.gov.so>',
          to: pickDpaEmail(serviceId),
          subject: `New submission – ${serviceId}`,
          text: "See attachment.",
          attachments: [
            { filename: uploaded.originalFilename || "form.pdf", content: buf }
          ]
        });

        return resolve(NextResponse.json({ success: true }));
      } catch (e: any) {
        console.error(e);
        return resolve(
          NextResponse.json(
            { success: false, error: e.message },
            { status: 500 }
          )
        );
      }
    });
  });
}

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
