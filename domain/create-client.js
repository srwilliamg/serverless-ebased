const DYNAMODB = require("aws-sdk/clients/dynamodb");
const SNS = require("aws-sdk/clients/sns");

const { calculateAge } = require("../helpers/calculate-age.js");
const {
  ClientCreatedEventSchema,
} = require("../schema/event/client-created.js");
const {
  CreateClientInputValidation,
} = require("../schema/input/create-client.js");
const { createClientService } = require("../service/create-client.js");
const { publishClientCreatedService } = require("../service/publish-client.js");

async function createClientDomain(eventData, commandMeta) {
  new CreateClientInputValidation(eventData, commandMeta);

  if (calculateAge(eventData.birth) > 65) {
    return {
      statusCode: 400,
      body: "Client must be under 65 years old",
    };
  }

  await createClientService(eventData);
  await publishClientCreatedService(
    new ClientCreatedEventSchema(eventData, commandMeta)
  );

  return {
    statusCode: 200,
    body: "Client added succesfully",
  };
}

module.exports = { createClientDomain };
