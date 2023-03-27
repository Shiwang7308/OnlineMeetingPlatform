const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "Your API KEY",
    APISecret: "YOUR API SECRET KEY",
  },
  production: {
    APIKey: "G8ciugfoRqGf5m_vZ8NETQ",
    APISecret: "qVNsNI0LJ5jygqOv7djeA61MrkMMP0minyvF",
  },
};

module.exports = config[env];
