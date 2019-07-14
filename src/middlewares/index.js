import express from 'express';
import cors from 'cors';
import userRouter from '../api/user/user.routes';
import { defaultErrorHandler, notFoundErrorHandler } from '../utils/errorHandler';

export default app => {
  app.use(express.json());
  app.use(cors());
  app.use('/', userRouter);
  app.use(notFoundErrorHandler);
  app.use(defaultErrorHandler);
};
