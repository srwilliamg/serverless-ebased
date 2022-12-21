/* eslint-disable no-octal */
const { calculateAge } = require("../helpers/calculate-age");
const { randomNumber } = require("../helpers/random-number");
const { createCardService } = require("../service/create-card");

const MINIMUM_NUMBER = 0000;
const MAXIMUM_NUMBER = 9999;

const createCardDomain = async ({ Message }) => {
  console.log(
    "🚀 ~ file: create-card.js:10 ~ createCardDomain ~ message",
    Message
  );
  const { birth, dni } = JSON.parse(Message);

  const creditCardNumber = `${randomNumber(
    MINIMUM_NUMBER,
    MAXIMUM_NUMBER
  )}-${randomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER)}-${randomNumber(
    MINIMUM_NUMBER,
    MAXIMUM_NUMBER
  )}-${randomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER)}`;

  const expirationDate = `${randomNumber(01, 12)}/${randomNumber(21, 35)}`;
  const securityCode = `${randomNumber(000, 999)}`;
  const type = calculateAge(birth) > 45 ? "Gold" : "Classic";

  await createCardService({
    dni,
    creditCardNumber,
    expirationDate,
    securityCode,
    type,
  });

  return {
    statusCode: 200,
    body: "Cards created succesfully",
  };
};

module.exports = { createCardDomain };
