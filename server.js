import express from 'express';
import appRoutes from './route'

const app = express(); // first endpoint
const port = 3000;

app.use(express.json()); // pass everything api receives in json format

app.use('/v1', appRoutes)

const STATUS = {
  SUCCESS: 'OK',
  FAILED: 'Failed'
};

app.listen(port, () => {
  console.log(`Listening... Go to http://localhost:${port} on your browser.`);
});