const app = require('./app');

const port = 3333 || process.env.PORT;

app.listen(port, err => {
    if (err) console.log(`Erro ao iniciar o servidor: --> ${err}`);
  
    return console.log(
      `Servidor online: acesse http://localhost:${port}`
    );
});