const { giftChooser } = require("../helpers/gift-chooser");
const { createGiftService } = require("../service/create-gift");

const createGiftDomain = async ({ Message }) => {
  console.log(
    "🚀 ~ file: create-gift.js:4 ~ createGiftDomain ~ Message",
    Message
  );

  const { birth, dni } = JSON.parse(Message);

  const gift = giftChooser(birth);

  await createGiftService({ gift, dni });
};

module.exports = { createGiftDomain };
