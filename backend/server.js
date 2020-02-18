const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/nodes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var routes = require('./routes/routes');
var osquery_routes = require('./routes/osquery_routes');


app.use('/', osquery_routes);
app.use('/nodes', routes);


var httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});