// src/pages/api/blogs/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "blogs.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // ensure directory exists
    if (!fs.existsSync(DATA_FILE)) {
      return res.status(200).json([]); 
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const blogs = JSON.parse(raw);
    return res.status(200).json(blogs);
  }
  res.setHeader("Allow", "GET");
  res.status(405).end();
}
