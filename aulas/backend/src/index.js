const express = require('express'); // permite lidar com rotas e parametros
const mongoose = require('mongoose');
const path = require('path'); // biblioteca do node para lidar com caminhos 
const cors = require('cors'); // biblioteca para permitir que o front end acesse o backend mesmo estando em dominios diferentes 

const app = express();

const server = require('http').Server(app); // suporta protocolo http
const io = require('socket.io')(server); // suporta web socket

mongoose.connect('mongodb+srv://pacheco:pass123@cluster0.jo8ba.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
     req.io = io;

     next();
});

app.use(cors());

// rota criada para acessar a pasta resized ex: localhost:3333/files/starwars1.jpg
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);


 

 