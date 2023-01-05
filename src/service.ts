import express, { Request, Response, NextFunction } from 'express';

const bodyParser = require('body-parser');
const app = express();
const port = 8080;

import {statusRouter} from './routers/StatusRouter';
import {userRouter} from './routers/UserRouter';
import {chatRouter} from './routers/ChatRouter';
import {messageRouter} from './routers/MessageRouter';

app.use(bodyParser.json());
app.use('/status', statusRouter);
app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/message', messageRouter);

app.listen(port, () => {
    console.log(`Service running on ${port}.`);
});