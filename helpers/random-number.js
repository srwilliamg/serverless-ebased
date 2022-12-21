function randomNumber(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}

module.exports = { randomNumber };
