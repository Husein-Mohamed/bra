// src/pages/api/forms/upload.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { formidable, File } from "formidable";
import nodemailer from "nodemailer";
import fs from "fs";

export const config = { api: { bodyParser: false } };

// 1) Define your per-form email map in one place:
const DESTINATION_MAP: Record<string,string> = {
  "register-controller": "saabirscc@gmail.com",
  "register-dpo":        "dpo@dpa.gov.so",
  "cross-border":        "crossborder@dpa.gov.so",
  "breach-report":       "breaches@dpa.gov.so",
  "complaint":           "complaints@dpa.gov.so",
  // …add or change entries here…
};

// 2) Optional: a fallback if someone posts an unknown serviceId
const DEFAULT_EMAIL = "info@dpa.gov.so";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow","POST");
    return res.status(405).json({ success:false, error:"Method Not Allowed" });
  }

  try {
    // parse form
    const { fields, files } = await new Promise<{
      fields: Record<string,any>;
      files:  Record<string,File|File[]>;
    }>((resolve, reject) => {
      const form = formidable({ multiples: false });
      form.parse(req, (err, fields, files) => err ? reject(err) : resolve({fields,files}));
    });

    const serviceId = String(fields.serviceId || "");
    const raw       = files.file;
    const uploaded: File = Array.isArray(raw) ? raw[0] : (raw as File);

    // figure out where the temp file actually is
    const tempPath = (uploaded as any).filepath ?? (uploaded as any).path;
    if (!tempPath) throw new Error("Upload missing temp path");

    const fileBuf = fs.readFileSync(tempPath);

    // pick your email from the map
    const to = DESTINATION_MAP[serviceId] ?? DEFAULT_EMAIL;

    // send mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: Number(process.env.SMTP_PORT!) === 465,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"DPA Forms" <no-reply@dpa.gov.so>`,
      to,
      subject: `📝 New form submission – ${serviceId}`,
      text: `Service: ${serviceId}\n\nSee attachment.`,
      attachments: [{
        filename: uploaded.originalFilename || "upload.dat",
        content: fileBuf
      }],
    });

    return res.status(200).json({ success:true });
  } catch (e:any) {
    console.error("Error in /api/forms/upload:",e);
    return res.status(500).json({ success:false, error:e.message||"Unknown error" });
  }
}
