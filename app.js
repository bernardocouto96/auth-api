import express from 'express';
import connectToDb from './database';
import startServer from './server';

const app = express();

startServer(app);
connectToDb();

app.get('/login', (req, res) => {
  res.status(200).send('request on endpoint /login');
});
