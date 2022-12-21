const dynamo = require("ebased/service/storage/dynamo");

async function createCardService({
  dni,
  creditCardNumber,
  expirationDate,
  securityCode,
  type,
}) {
  const dbParams = {
    ExpressionAttributeNames: {
      "#C": "creditCard",
    },
    ExpressionAttributeValues: {
      ":c": {
        number: creditCardNumber,
        expiration: expirationDate,
        ccv: securityCode,
        type: type,
      },
    },
    Key: { dni },
    ReturnValues: "ALL_NEW",
    TableName: process.env.CLIENTS_TABLE,
    UpdateExpression: "SET #C = :c",
  };

  const dbResult = await dynamo.updateItem(dbParams);
  console.info(dbResult);
}

module.exports = { createCardService };
