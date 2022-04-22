const express = require('express');
const login = express();
login.get('/ping', (request, response) => {
response.send('pong');
});
login.listen(8080, 'localhost');
