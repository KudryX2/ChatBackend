const express = require('express');
const statusRouter = express.Router();

const controller = require('../controllers/StatusController');

statusRouter.get('/ping', controller.ping);

export {statusRouter};