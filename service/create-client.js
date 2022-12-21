const dynamo = require("ebased/service/storage/dynamo");

async function createClientService({ dni, name, lastName, birth }) {
  await dynamo.putItem({
    Item: { dni, name, lastName, birth },
    ReturnConsumedCapacity: "TOTAL",
    TableName: process.env.CLIENTS_TABLE,
  });
}

module.exports = { createClientService };
