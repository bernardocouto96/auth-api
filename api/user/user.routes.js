import { Router } from 'express';

const routes = new Router();

routes.post('/login', (req, res) => res.send('login endpoint'));

export default routes;
