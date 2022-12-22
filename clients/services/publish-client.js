const sns = require("ebased/service/downstream/sns");

async function publishClientCreatedService(clientCreatedEvent) {
  const { eventPayload, eventMeta } = clientCreatedEvent.get();

  const snsPublishParams = {
    TopicArn: process.env.CLIENTS_TOPIC_ARN,
    Message: eventPayload,
  };

  await sns.publish(snsPublishParams, eventMeta);
}

module.exports = { publishClientCreatedService };
