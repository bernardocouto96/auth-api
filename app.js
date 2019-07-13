import express from 'express';
import connectToDb from './src/database';
import startServer from './src/server';
import setMiddlewares from './src/middlewares';

const app = express();

setMiddlewares(app);
startServer(app);
connectToDb();

app.get('/login', (req, res) => {
  res.status(200).send('request on endpoint /login');
});
