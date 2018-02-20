const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

const config = require('./src/config/index.config')
const routes = require('./src/router/index.router.js');
const mongoose = require('./src/lib/mongoose')


// Setup express
app.disable("x-powered-by");
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use('/', routes);



// Server up!
var server = (app.server = http.createServer(app));
server.listen(process.env.PORT || config.PORT, function() {
  console.log("App listening on port - " + config.PORT + "!");
});