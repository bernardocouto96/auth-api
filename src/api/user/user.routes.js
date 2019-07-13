import { Router } from 'express';
import { signUp } from './user.controller';

const routes = new Router();

routes.post('/sign-in', (req, res) => res.send('sign in endpoint')).post('/sign-up', signUp);

export default routes;
