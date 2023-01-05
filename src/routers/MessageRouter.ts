const express = require('express');
const messageRouter = express.Router();

const validator = require('../middleware/Validator');
const controller = require('../controllers/MessageController');

messageRouter.use('/', validator.sessionValidator);
messageRouter.post('/create', controller.createMessage);
messageRouter.delete('/delete', controller.deleteMessage)
messageRouter.get('/list', controller.listMessages);

export {messageRouter};