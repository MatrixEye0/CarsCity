import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { upload } from "../multer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const router = express.Router();

router.post("/api/upload", upload.single("img"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const name = `${Date.now()}_${req.file.originalname}`
    const tempPath = req.file.path;
    const targetPath = path.join("Carshow", "public",name);

    // Rename the temporary file to the target path
    fs.rename(tempPath, targetPath, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error saving file", error: err.message });
      }
      res.status(200).json({
        message: "File uploaded successfully",
        file: {
          originalName: name,
          storagePath: path.join(__dirname, targetPath), // Absolute path of the file
          size: req.file.size,
        },
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
