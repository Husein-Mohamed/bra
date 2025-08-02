import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "blogs.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { title, content, coverImage } = req.body; // coverImage may be ""

  /* ensure data dir/file exist */
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const current = fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"))
    : [];

  current.push({
    title,
    content,
    coverImage,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(DATA_FILE, JSON.stringify(current, null, 2));
  return res.status(200).json({ success: true });
}
