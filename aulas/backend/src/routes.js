const express = require('express');
const multer = require('multer'); // biblioteca que lida com mult part form data e automatiza processo de envio de arquivo pro backend
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig); 


routes.get('/posts', PostController.index); 
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

 module.exports = routes;