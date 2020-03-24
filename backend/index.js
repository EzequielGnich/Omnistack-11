const express = require('express')
const app = express();

app.use(express.json());

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

app.get('/', (req, res) => {
    return res.json({evento: "semana"});
})

app.listen(3333);