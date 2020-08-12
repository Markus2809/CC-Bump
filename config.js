module.exports = {
  mongodb_connection_uri: process.env.URI, // The URL to connect to the MongoDB database
  prefix: "your prefix here", // The bots prefix
  token: process.env.TOKEN, // The bots token
  users_that_are_able_to_add_premium: ["your id here"],
  bump_cooldown: "30 minutes", // The cooldown between bumping
  support_invite: "The invite for the support server here", // The invite for the support server
};
