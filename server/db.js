const mongoose = require("mongoose");

const connect = () => {
  const dbOptions = {
    useNewUrlParser: true,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
  };
  mongoose.set("createIndexes", true);
  return mongoose.connect(
    process.env.DB_URL,
    dbOptions
  );
};

const disconnect = () => {
  return mongoose.disconnect();
};
module.exports = { connect, disconnect };
