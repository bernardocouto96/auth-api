import { Router } from 'express';
import { signUp, signIn } from './user.controller';

const routes = new Router();

routes.post('/sign-in', signIn).post('/sign-up', signUp);

export default routes;
