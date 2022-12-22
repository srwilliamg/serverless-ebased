const dynamo = require("ebased/service/storage/dynamo");

async function addProducts({ dni, products }) {
  await dynamo.updateItem({
    ExpressionAttributeNames: {
      "#PRODUCT": "products",
    },
    ExpressionAttributeValues: {
      ":products": products,
      ":empty_list": [],
    },
    Key: { dni },
    ReturnValues: "ALL_NEW",
    TableName: process.env.CLIENTS_TABLE,
    UpdateExpression:
      "SET #PRODUCT = list_append(if_not_exists(#PRODUCT, :empty_list), :products)",
  });
}

module.exports = { addProducts };
