"use strict";
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const routes = require("./src/routes");
const path = require("path");
const logger = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

/*
 * Habilitando e Adicionando Middlewares
 */

app.use(logger("dev")); // Habilitando o Log via console
app.use(express.static(path.resolve("src", "public"))); // Definindo a Pasta Public
app.use(express.json()); //Habilitando JSON  e configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));

/**
 *Instanciando Rotas
 */
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use("/", routes);
module.exports = app;
