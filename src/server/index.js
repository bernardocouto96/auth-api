import http from 'http';
import { port } from '../config';

export default app => {
  const server = http.createServer(app);

  server.on('error', error => console.log(error));
  server.on('listening', () => console.log(`Server running on port ${port}`));

  server.listen(port);
};
