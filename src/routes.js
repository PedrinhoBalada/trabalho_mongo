const express = require("express");
const routes = express.Router();
const EnderecoController = require("./app/controller/EnderecoController");
const ObjetivoController = require("./app/controller/ObjetivoController");
const LocalController = require("./app/controller/LocalController");
const { router } = require("./server");
routes.get("/", function (req, res) {
  return res.send("Servidor está aberto!!!");
});
module.exports = routes;
routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);
routes.get("/objetivo", ObjetivoController.list);
routes.post("/objetivo", ObjetivoController.store);
routes.post("/objetivo/delete", ObjetivoController.delete);
routes.get("/local", LocalController.list);
routes.post("/local", LocalController.store);
routes.post("/local/delete", LocalController.delete);
