/*
Métodos HTTP:
    GET:    Buscar informação do backend
    POST:   Criar informação no backend
    PUT:    Alterar informação no backend
    DELETE: Apagar uma informação do backend
*/

/*
Tipos de parametros:
    Query Params: Parametros nomeados enviados na rota após "?"(Filtros, paginação);
    Route Params: Parametros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

const express = require("express");
const app = express();
const cors = require("cors");
const { errors } = require('celebrate');

const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;
