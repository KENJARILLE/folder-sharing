const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const app = express();

// Enable CORS (you can specify allowed origins if needed)
app.use(cors());

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dlj56dege", // replace with your Cloudinary cloud name
  api_key: "513513488859785", // replace with your Cloudinary API key
  api_secret: "win1tf56FH-UVSwWNas69Ojsndk", // replace with your Cloudinary API secret
});

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file; // Get the uploaded file

  // Upload the file to Cloudinary
  cloudinary.uploader
    .upload_stream(
      { folder: `folder-sharing/${req.body.folderId}` }, // Folder in Cloudinary
      (error, result) => {
        if (error) {
          return res.status(500).json({ message: "File upload failed", error });
        }
        // Return the Cloudinary result
        res.json({ message: "File uploaded successfully", data: result });
      }
    )
    .end(file.buffer); // Upload the file buffer from memory
});

// Fetch files route
app.get("/fetch-files", (req, res) => {
  const folderId = req.query.folderId;

  cloudinary.api.resources(
    {
      type: "upload",
      prefix: `folder-sharing/${folderId}`, // Fetch files from a specific folder
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ message: "Failed to fetch files", error });
      } else {
        res.json(result.resources); // Return file list
      }
    }
  );
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
