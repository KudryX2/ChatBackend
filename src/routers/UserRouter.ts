const express = require('express');
const userRouter = express.Router();

const controller = require('../controllers/UserController');

userRouter.post('/create', controller.createUser)
userRouter.post('/log-in', controller.logIn);
userRouter.get('/log-out', controller.logOut);

export {userRouter};