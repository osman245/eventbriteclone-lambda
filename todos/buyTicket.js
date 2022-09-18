"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: process.env.DATABASE_URL,
});
//every post gets redirected to this.
module.exports.buy = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_TABLE_USERTICKET,
    Item: {
      id: data.id,
      quantity: data.quantity,
      email: data.email,
      fName: data.fName,
      lName: data.lName,
      address: data.address,
      country: data.country,
      province: data.province,
      zip: data.zip,
      nameOnCard: data.nameOnCard,
      cardNumber: data.cardNumber,
      expiration: data.expiration,
      cvv: data.cvv,
    },
  };

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't create the todo item.",
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
