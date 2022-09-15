const AWS = require("aws-sdk");
const parseMultipart = require("parse-multipart");
const {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  ListObjectsCommandInput,
} = require("@aws-sdk/client-s3");

module.exports.upload = async (event, context, callback) => {
  console.log(event.body);
  const client = new S3Client({
    forcePathStyle: true,
    credentials: {
      accessKeyId: "S3RVER", // This specific key is required when working offline
      secretAccessKey: "S3RVER",
    },
    endpoint: "http://localhost:4569",
  });
  client
    .send(
      new ListObjectsCommand({
        Bucket: "local-bucket",
      })
    )
    .then((res) => {
      return res;
    });

  return null;
};

// function extractFile(event) {
//   const boundary = parseMultipart.getBoundary(event.headers["content-type"]);
//   const parts = parseMultipart.Parse(
//     Buffer.from(event.body, "base64"),
//     boundary
//   );
//   const [{ filename, data }] = parts;

//   return {
//     filename,
//     data,
//   }; }
/*
 callback is a function which is called when a task is completed, thus helps in preventing any kind of blocking and a callback function allows other code to run in the meantime.


*/
