const http = require('http');
const {load} = require('./dataload.js');
const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors(
    {
        origin: '*'
    }
));

var path = require('path');
var data = load();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res)
    {
        res.sendFile(path.join(__dirname, '/index.html'));
    }
 );

app.get('/user', function(req, res)
    {
        res.send(data);
    });


app.listen(PORT, function()
{
    console.log('Server running on port'+ PORT);
});
