require("./utils/loadEnvVariables")(); // load env variables
const express = require("express");
const path = require("path");
const app = express();
const api = express();
const db = require("./db");

// variables
const port = process.env.PORT || 8080;
const appClientPath = path.join(__dirname, "..", "client", "build");

// load environment variables

//set app locals
app.locals.title = "Dee";
app.locals.name = "Dee App";

// set middlewares
express.json();
app.use(express.static(appClientPath)); // tell express to serve dee app static files
app.use("/api", api); // set api as a sub app.

// connect to DB
db.connect()
  .then(() => {
    console.log("successfully connectted to DB");
  })
  .catch(err => {
    console.log(err.message);
    process.exit(0);
  });

// handle basic routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(appClientPath, "index.html"));
});

api.get("/*", (req, res) => {
  res.send("<h1>#Hello From Dee Api</h1>");
});

app.listen(port, () => {
  console.log("Dee Server is Up and Running ...");
});
