import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { randomUUID } from "crypto";

export const config = { api: { bodyParser: false } }; // let formidable handle it

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const form = formidable({ multiples: false, keepExtensions: true });

  form.parse(req, async (err, _fields, files) => {
    if (err) return res.status(400).json({ error: "parse error" });

    // unwrap array → single file
    const raw = files.file;
    const file: formidable.File | undefined =
      Array.isArray(raw) ? raw[0] : raw;

    if (!file || !file.filepath)
      return res.status(400).json({ error: "no file sent" });

    const ext = path.extname(file.originalFilename || "");
    const filename = `${randomUUID()}${ext}`;
    const dest = path.join(uploadsDir, filename);

    try {
      await fs.promises.rename(file.filepath, dest);
      return res.status(200).json({ url: `/uploads/${filename}` });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "write failed" });
    }
  });
}
