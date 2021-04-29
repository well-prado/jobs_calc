const express = require("express");
const server = express();
const routes = require("./routes");

//Usando template engine
server.set('view engine', 'ejs')

// Habilitar arquivos estáticos
server.use(express.static("public"))

server.use(routes);

server.listen(4000, () => console.log('rodando'));
