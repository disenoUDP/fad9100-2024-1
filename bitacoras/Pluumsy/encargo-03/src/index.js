const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// inicializaciones
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storage }).single('image'));

// global variables

// routes
app.use(require('./routes/index'));

// static files

// start the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
