import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/', routes);

export default app;
