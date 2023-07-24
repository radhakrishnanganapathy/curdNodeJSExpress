/* --------------------------Main Module----------------------------------------------------- */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* --------------------------File Module----------------------------------------------------- */
const dbConnection = require("./db/database");
const apiRouter = require("./api/api");
/* --------------------------Main Get----------------------------------------------------- */

app.get("/", async (req, res) => {
  res.send({ "I am": "alive" });
});

/* --------------------------Use Modules----------------------------------------------------- */

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.listen(8080, () => {
  console.log("port 8080 connected");
});
