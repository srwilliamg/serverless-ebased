const { uniqWith, isEqual } = require("lodash");
const { BuyProductsInputValidation } = require("../schema/input/buy-products");
const { addProducts } = require("../services/add-products");

async function buyProductsDomain(commandData, commandMeta) {
  new BuyProductsInputValidation(commandData, commandMeta);
  const { dni, products } = commandData;
  const uniqueProducts = uniqWith(products, isEqual);
  console.log(
    "🚀 ~ file: buy-products.js:15 ~ buyProductsDomain ~ uniqueProducts",
    uniqueProducts
  );

  await addProducts({ dni, products: uniqueProducts });

  return {
    statusCode: 200,
    body: "Products added successfully",
  };
}

module.exports = { buyProductsDomain };
