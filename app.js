import express from 'express';
import connectToDb from './database';
import startServer from './server';
import setMiddlewares from './middlewares';

const app = express();

setMiddlewares(app);
startServer(app);
connectToDb();

app.get('/login', (req, res) => {
  res.status(200).send('request on endpoint /login');
});
