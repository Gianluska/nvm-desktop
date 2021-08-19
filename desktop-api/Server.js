const CommandGet = require("./CommandGet");
const ChangeNodeVersion = require("./ChangeNodeVersion");

// --------------------------------

function Server() {
  const express = require("express");
  const cors = require('cors');
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/", (_, res) => {
    res.send("The API is running!");
  });

  app.get("/api/GetNodeVersion", (_, res) => {
    res.send({ "version": CommandGet.GetNodeVersion() });
  });

  app.get("/api/GetNodeList", (_, res) => {
    res.send({ "versionList": CommandGet.GetNodeList() });
  });

  app.post("/api/ChangeNodeVersion", (req, res) => {
    ChangeNodeVersion(req.body.version);
    res.send(true)
  })

  app.listen(3000, () => console.log("Listening on port 3000"));
}

module.exports = Server