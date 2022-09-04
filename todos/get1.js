// "use strict";

// const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies

// const dynamoDb = new AWS.DynamoDB.DocumentClient({
//   region: "localhost",
//   endpoint: "http://localhost:8000",
// });

// module.exports.get1 = (event, context, callback) => {
//   const params = {
//     TableName: process.env.DYNAMODB_TABLE_USERTICKET,
//     Item: {
//       id: event.id,
//       quantity: event.quantity,
//       email: event.email,
//       fName: event.fName,
//       lName: event.lName,
//       address: event.address,
//       country: event.country,
//       province: event.province,
//       zip: event.zip,
//       nameOnCard: event.nameOnCard,
//       cardNumber: event.cardNumber,
//       expiration: event.expiration,
//       cvv: event.cvv,
//     },
//   };

//   // fetch todo from the database
//   dynamoDb.get(params, (error, result) => {
//     // handle potential errors
//     if (error) {
//       console.error(error);
//       callback(null, {
//         statusCode: error.statusCode || 501,
//         headers: { "Content-Type": "text/plain" },
//         body: "Couldn't fetch the todo item.",
//       });
//       return;
//     }

//     // create a response
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify(result.Item),
//     };
//     callback(null, response);
//   });
// };
