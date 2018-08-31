import express from 'express';

// Controller imports
import DutyController from './controllers/DutyController';

const routes = express.Router();

routes.get('/', function (req, res) {
  res.send('Home Page will be implement later')
});

routes.get('/duty/:month/:year', DutyController.get);

export default routes;
