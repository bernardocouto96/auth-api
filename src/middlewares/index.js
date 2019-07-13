import express from 'express';
import cors from 'cors';
import userRouter from '../api/user/user.routes';

export default app => {
  app.use(express.json());
  app.use(cors());
  app.use('/', userRouter);
};
