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

const express = require('express')
const app = express();
const routes = require('./routes')

const port = 3333 || process.env.PORT;

app.use(express.json());

app.use(routes);

app.listen(port, err => {
    if (err) console.log(`Erro ao iniciar o servidor: --> ${err}`)

    return console.log(`Servidor online: *porta: ${port}* acesse http://localhost:${port}`)
});