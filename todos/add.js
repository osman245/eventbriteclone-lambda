const uuid = require("uuid");

const aws = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: "http://localhost:8000",
});

module.exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMO_TABLE,
    key: {
      id: event.pathParameters.id,
    },
  };
  dynamoDB.get(params, (error, result) => {
    if (error) {
      console.log(error);
      callback(null, {
        statusCode: error.statusCode || 500,
        body: "internal error ...",
      });
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};

// The document client simplifies working with items in
//Amazon DynamoDB by abstracting away the notion of attribute values. This abstraction annotates native JavaScript types supplied as input parameters, as well as converts annotated response data to native JavaScript types.

//how to put into dynamodb
/* 
1.)Create function
2.)Create params
3.)use params to dynamo.put..
4.) get response...

*/
