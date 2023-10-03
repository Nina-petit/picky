require('dotenv').config();

// SERVER
const express = require('express');
//const authRouter = require('./app/routers/auth');
const router = require('./routers/router');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

// SWAGGER DOCUMENTATION API
let options = {
   swaggerDefinition: {
       info: {
           description: 'Search engine API for movies and tv shows.',
           title: 'Picky',
           version: '1.0.0',
       },
       host: 'localhost:3000',
       basePath: '/',
       produces: [
           "application/json"
       ],
       schemes: ['http', 'https'],
       securityDefinitions: {
        JWT: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: "", 
        }
       }
   },
   basedir: __dirname, // app absolute path
   files: ['./app/routers/*.js', './app/dataMappers/*.js'] // Path to the API handle folder
};
expressSwagger(options);

// ROUTES
app.use('/', router);
app.use(cors('*'));

// ROUTES
//app.use('/', authRouter);
app.use(router);

// PORT
const port = process.env.PORT || 3000;

app.get('/config', (req, res) => {
    // Renvoyer l'URL du serveur
    res.json({ serverUrl: process.env.SERVER_URL });
  });

app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
