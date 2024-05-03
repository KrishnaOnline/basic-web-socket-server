const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

// app.get('/', (req, res) => {
//     res.send(`<h1>Server is Running...</h1>`)
// })

const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log("Server Received Message");
        io.emit('chat message', msg);
    });
});

app.get('/', (req, res) => {
    // res.sendFile(join(__dirname, '/index.html'));
    res.sendFile(__dirname+'/index.html');
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})