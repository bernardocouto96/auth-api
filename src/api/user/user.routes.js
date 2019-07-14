import { Router } from 'express';
import { signUp, signIn, find } from './user.controller';

const routes = new Router();

routes
  .post('/sign-in', signIn)
  .post('/sign-up', signUp)
  .get('/:userId', find);

export default routes;
