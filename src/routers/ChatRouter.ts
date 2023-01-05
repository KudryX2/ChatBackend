const express = require('express');
const chatRouter = express.Router();

const validator = require('../middleware/Validator');
const controller = require('../controllers/ChatController');

chatRouter.use('/', validator.sessionValidator);
chatRouter.post('/create', controller.createChat);
chatRouter.delete('/delete', controller.deleteChat);
chatRouter.get('/list', controller.listChats)

export {chatRouter};