import express from 'express';

import userRoutes from './route/user.routes';
import mainRoutes from './route/main.routes';

const app = express(); // first endpoint
const port = 3000;

app.use(express.json()); // pass everything api receives in json format

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

const STATUS = {
  SUCCESS: 'OK',
  FAILED: 'Failed'
};

app.listen(port, () => {
  console.log(`Listening... Go to http://localhost:${port} on your browser.`);
});