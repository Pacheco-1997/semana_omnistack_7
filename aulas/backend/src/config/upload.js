const multer = require('multer'); //  serve para salvar os arquivos de imagem na maquina
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'),
        filename: function(req, file, cb){
             cb(null, file.originalname);
        }
    })
}