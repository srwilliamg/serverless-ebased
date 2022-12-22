const { InputValidation } = require("ebased/schema/inputValidation");

class BuyProductsInputValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      type: "BUY.BUY_PRODUCTS",
      specversion: "v1.0.0",
      source: meta.source,
      payload: payload,
      schema: {
        dni: { type: String, required: true },
        products: {
          type: [
            {
              name: { type: String, required: true },
              price: { type: Number, required: true },
            },
          ],
          max: 100,
        },
      },
    });
  }
}

module.exports = { BuyProductsInputValidation };
