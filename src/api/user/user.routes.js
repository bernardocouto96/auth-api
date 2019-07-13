import { Router } from 'express';

const routes = new Router();

routes.post('/sign-in', (req, res) => res.send('sign in endpoint'));

export default routes;
