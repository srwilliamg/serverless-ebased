const sns = require("ebased/service/downstream/sns");

async function publishClientCreatedService(clientCreatedEvent) {
  const { eventPayload, eventMeta } = clientCreatedEvent.get();
  console.log(
    "🚀 ~ file: publish-client.js:5 ~ publishClientCreatedService ~ process.env.CLIENTS_TOPIC_ARN",
    process.env.CLIENTS_TOPIC_ARN
  );

  const snsPublishParams = {
    TopicArn: process.env.CLIENTS_TOPIC_ARN,
    Message: eventPayload,
  };

  await sns.publish(snsPublishParams, eventMeta);
}

module.exports = { publishClientCreatedService };
