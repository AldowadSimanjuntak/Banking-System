    const express = require('express');
    // dependecies swagger
    const swaggerJSON = require('./openapi.json')
    const swaggerUI = require('swagger-ui-express')

    const path = require('path');
    const multer = require('./utils/multer');
    const mediaController = require('./api/media');
    const multerConfig = require('./utils/multer');


    const app = express();
    const port = 3000;

    const pool = require('./db'); 
    const nasabahController = require('./controllers/nasabahController');

    const transactionRouter = require('./api/Transaction'); 
    const bankAccountRouter = require('./api/BankAccount'); 
    const userRouter = require('./api/User'); 
    const authRouter = require('./api/auth');

    app.use(express.json());

    app.use('/nasabah', nasabahController);

    // router untuk masing-masing api
    app.use('/transaction', transactionRouter); 
    app.use('/bank-account', bankAccountRouter); 
    app.use('/user', userRouter); 
    // router auth
    app.use('/auth', authRouter);
    //router dokumentasi swagger
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))


    const session = require('express-session');
    const flash = require('connect-flash');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(session({
      secret: 'secret-key', // Buat Secret key 
      resave: false,
      saveUninitialized: true,
    }));

    app.use(flash());

    app.set('view engine', 'ejs'); // Mengatur EJS sebagai view engine
    app.set('views', __dirname + '/views'); // Menentukan direktori views

    // Import router.js
    const routerView = require('./views/router');

    // Gunakan rute router.js
    app.use('/views/router', routerView);

    // Rute untuk halaman register
    app.get('/register', (req, res) => {
    res.render('register', { messages: { error: req.flash('error'), success: req.flash('success') } });
    });
    // Rute untuk halaman login
    app.get('/login', (req, res) => {
    res.render('login', { messages: { error: req.flash('error'), success: req.flash('success') } });
    });
    //Rute dashboard
    app.get('/dashboard', (req, res) => {
    res.render('dashboard');
    });
    // Menetapkan middleware express.static
    app.use(express.static(path.join(__dirname, 'public')));
    
    // Middleware untuk menangani pengunggahan gambar ke local
    app.post('/upload/image', multerConfig.localImage.single('image'), mediaController.uploadImage);
    // Middleware untuk menangani pengunggahan gambar ke ImageKit
    app.post('/upload/imagekit', multerConfig.imagekitImage.single('image'), mediaController.imagekitUpload);

    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });