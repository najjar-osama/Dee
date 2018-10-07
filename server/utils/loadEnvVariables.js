const dotenv = require("dotenv");
const path = require("path");
const appRoot = path.join(__dirname, "..", "..");

const loadEnvVariables = () => {
  if (process.env.NODE_ENV === "dev") {
    dotenv.load({ path: path.join(appRoot, "dev.env") });
  }
  if (process.env.NODE_ENV === "test") {
    dotenv.load({ path: path.join(appRoot, "test.env") });
  }
  if (process.env.NODE_ENV === "prod") {
    dotenv.load({ path: path.join(appRoot, "prod.env") });
  }
};

module.exports = loadEnvVariables;
