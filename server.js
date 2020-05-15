const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

//Define route
app.use('/', require('./route/api/router'))

app.listen(PORT, console.log(`Server has started on ${PORT}`))