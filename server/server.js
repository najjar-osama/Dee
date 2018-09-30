const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Dee Server is Up and Running ...");
});

app.get("/", (req, res) => {
  res.send("<h1>#Hello From Dee</h1>");
});
