import express from 'express';
import connectToDb from './src/database';
import startServer from './src/server';
import setMiddlewares from './src/middlewares';

const app = express();

setMiddlewares(app);
startServer(app);
connectToDb();
