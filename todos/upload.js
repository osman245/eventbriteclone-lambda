const express = require("express");
const serverless = require("serverless-http");
const fileUpload = require("express-fileupload");
const AWS = require("aws-sdk");
require("dotenv").config();

const app = express();

// using upload middleware
app.use(fileUpload());
app.use(express.json());

// s3 config
const s3 = new AWS.S3({
  s3ForcePathStyle: true,
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.SECRET_KEY,
  endpoint: new AWS.Endpoint(process.env.S3OFFLINE_URL),
});

// actual function for uploading file
async function uploadFile(file) {
  let key = `${file.file.name}`;
  const params = {
    Bucket: process.env.BUCKET, // bucket you want to upload to
    Key: key, // put all image to fileupload folder with name scanskill-${Date.now()}${file.name}`
    Body: file.file.data,
    ACL: "public-read",
    ContentType: "*/*",
  };
  const data = await s3.upload(params).promise();
  return data; // returns the url location
}

app.put("/todos/upload", async (req, res) => {
  // the file when inserted from form-data comes in req.files.file
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  console.log(req.files.file);
  const keyVal = await uploadFile(req.files);

  return res.status(200).json({
    publicUrl: `http://localhost:4569/warsamestorages/${req.files.file.name}`,
  });
});
module.exports.handler = serverless(app);

// starts the express server in the designated port
