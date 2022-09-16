const AWS = require("aws-sdk");
const { resolve } = require("bluebird");
const parseMultipart = require("parse-multipart-data");
const multipart = require("parse-multipart-data");

const s3 = new AWS.S3({
  region: "us-east-2",
  // accessKeyId: "",
  // secretAccessKey: "/OVZQZ7aAP",
});

module.exports.upload = async (event) => {
  console.log(event);

  const response = {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({ message: "successfully uploaded file to S3" }),
  };

  try {
    const header = event.headers["Content-Type"];
    let boundary = header.split("=");
    boundary = boundary[1];
    console.log(event.body);
    let x = event.body;
    // const parsedBody = JSON.parse(JSON.stringify(event.body));
    // const base64File = parsedBody.file;
    // console.log(base64File);
    // let val = event.body.split(" ");
    // val = val[3]; //filename="49anagramthumbnail.png
    // console.log("1st time" + val);
    // val = val.split("=");
    // val = val[1]; // "49anagramthumbnail.png\r\n"
    // console.log("2nd time" + val);
    const base64Data = new Buffer.from(
      x.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    // console.log("last time" + val);

    const params = {
      Bucket: process.env.BUCKET,
      Key: `${new Date().toISOString()}.jpeg`,
      Body: base64Data,
      ContentEncoding: "base64",
      ContentType: "image/jpeg",
      ACL: "public-read",
    };

    const upload = await s3.putObject(params).promise();
    response.body = JSON.stringify({
      message: "successfully uploaded file to S3",
    });
  } catch (e) {
    console.error(e);
    response.body = JSON.stringify({
      message: "File failed to upload",
      errorMessage: e,
    });
    response.statusCode = 500;
  }
  return response;
};

// module.exports.upload = async (event) => {
//   const result = await getUploadURL();
//   console.log("result" + result);
//   return result;
// };

// const getUploadURL = async function() {};

//     const { filename, data } = extractFile(event);
//     await s3
//       .putObject({
//         Bucket: process.env.BUCKET,
//         Key: filename,
//         ACL: "public-read",
//         Body: data,
//       })
//       .promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         link: `https://${BUCKET}.s3.amazonaws.com/${filename}`,
//       }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: err.stack }),
//     };
//   }
// };

// function extractFile(event) {
//   const x = JSON.stringify(event.body);
//   const parsedBody = JSON.parse(x);
//   console.log("parse!!!!!!!!!!!!!!!DDDDSS" + parsedBody);
//   let handler = event.headers["Content-Type"];
//   let boundary = handler.split("=");
//   boundary = boundary[1];
//   console.log(boundary);

//   for (let i = 0; i < parts.length; i++) {
//     const part = parts[i];
//     console.log(part + i);
//     // will be: { filename: 'A.txt', type: 'text/plain', data: <Buffer 41 41 41 41 42 42 42 42> }
//   }

//   const [{ filename, data }] = parts;

//   return {
//     filename,
//     data,
//   };
// }

// const AWS = require("aws-sdk");
// const multipart = require("parse-multipart-data");

// const BUCKET = process.env.BUCKET;

// const s3 = new AWS.S3({
//   region: "us-east-2",
//   accessKeyId: "AKIAZ2EVJG5IO6LJHZBF",
//   secretAccessKey: "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",
// });

// //event handled..
// module.exports.upload = async (event) => {
//   console.log(event + "\ndivder");

//   console.log(event.body);
//   const parsedBody = JSON.stringify(event.body);
//   console.log("event stringfy" + parsedBody);
//   // let header = parsedBodyFinal["Content-Type"];
//   // let boundary = header.split(" ")[1];
//   // boundary = header.split("=")[1];
//   // console.log(boundary);

//   try {
//     const params = {
//       Bucket: BUCKET,
//       Key: `images/${new Date().toISOString()}`,
//       Body: decodedFile,
//       ContentType: "*/*",
//     };

//     const uploadResult = await s3.upload(params).promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         link: `https://${BUCKET}.s3.us-east-2.amazonaws.com/${decodedFile}`,
//       }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: err.stack }),
//     };
//   }
// };

// //const base64File = parsedBodyFinal;
// // console.log(base64File);
// // const decodedFile = Buffer.from(
// //   base64File.replace(/^data:image\/\w+;base64,/, ""), //reading it as a base64 file
// //   "base64"
// // );

//const randomId = parseInt(Math.random * 1000000000);

// const s3Params = {
//   Bucket: process.env.BUCKET,
//   Key: `${randomId}.jpg`,
//   ACL: "public-read",
//   ContentType: "image/jpeg",
// };

// console.log("getUploadURL:", s3Params);
// return new Promise((resolve, reject) => {
//   resolve({
//     statusCode: 200,
//     isBase64Encoded: false,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify({
//       uploadURL: s3.getSignedUrl("putObject", s3Params),
//       photoFilename: `${randomId}.jpg`,
//     }),
//   });
// });
