import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import pino from 'pino';

import userRoutes from './route/user.routes';
import mainRoutes from './route/main.routes';
import compression from 'compression';

const app = express(); // first endpoint
const port = 3000;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 48, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
});

app.use(compression());
app.use(limiter); // Apply the rate limiting middleware to all requests.
app.use(helmet());
app.use(express.json()); // Pass everything api receives in json format

// routes
app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

const STATUS = {
  SUCCESS: 'OK',
  FAILED: 'Failed'
};

app.listen(port, () => {
  console.log(`Listening... Go to http://localhost:${port} on your browser.`);
});