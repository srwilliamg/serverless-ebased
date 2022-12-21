const dynamo = require("ebased/service/storage/dynamo");

async function createGiftService({ dni, gift }) {
  const dbParams = {
    ExpressionAttributeNames: {
      "#G": "gift",
    },
    ExpressionAttributeValues: {
      ":g": gift,
    },
    Key: {
      dni,
    },
    ReturnValues: "ALL_NEW",
    TableName: process.env.CLIENTS_TABLE,
    UpdateExpression: "SET #G = :g",
  };

  const dbResult = await dynamo.updateItem(dbParams);
  console.info(dbResult);
}

module.exports = { createGiftService };
