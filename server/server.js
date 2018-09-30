const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const api = express();

// variables
const port = process.env.PORT || 8080;
const appRoot = path.join(__dirname, "..");
const appClientPath = path.join(__dirname, "..", "client", "build");

// load environment variables
if (process.env.NODE_ENV === "dev")
  dotenv.load({ path: path.join(appRoot, "dev.env") });
if (process.env.NODE_ENV === "test")
  dotenv.load({ path: path.join(appRoot, "test.env") });
if (process.env.NODE_ENV === "prod")
  dotenv.load({ path: path.join(appRoot, "prod.env") });

//set app locals
app.locals.title = "Dee";
app.locals.name = "Dee App";

// set middlewares
express.json();
app.use(express.static(appClientPath)); // tell express to serve dee app static files
app.use("/api", api); // set api as a sub app.

// connect to DB
const dbOptions = {
  useNewUrlParser: true,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME
};
mongoose
  .connect(
    process.env.DB_URL,
    dbOptions
  )
  .then(() => {
    console.log(
      `Connected to DB (${process.env.DB_NAME}) [env:${
        process.env.NODE_ENV
      }] successfully!`
    );
  })
  .catch(error => {
    console.log(error.message);
    process.exit();
  });

app.get("/*", (req, res) => {
  res.sendFile(path.join(appClientPath, "index.html"));
});

api.get("/*", (req, res) => {
  res.send("<h1>#Hello From Dee Api</h1>");
});

app.listen(port, () => {
  console.log("Dee Server is Up and Running ...");
});
