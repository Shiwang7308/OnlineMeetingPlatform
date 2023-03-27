const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "Your API KEY",
    APISecret: "YOUR API SECRET KEY",
  },
  production: {
    APIKey: "Your API KEY",
    APISecret: "YOUR API SECRET KEY",
  },
};

module.exports = config[env];
