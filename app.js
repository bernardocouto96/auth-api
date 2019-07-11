import express from 'express';

const app = express();

app.get('/login', (req, res) => {
  res.status(200).send('request on endpoint /login');
});

app.listen(5000, () => {
  console.log('server running in port 5000');
});
