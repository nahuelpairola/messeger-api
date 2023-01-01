import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
require('express-async-errors')

const app = express().use(bodyParser.json());

const PORT = 3000;

dotenv.config()

import {chatRouter} from "./routes/chat"
import {msgRouter} from "./routes/message"
import { errorHandlerMiddleware } from './middleware/error-handler';
import { notFoundMiddleware } from './middleware/not-found';

app.use('/api/v1/chats',chatRouter)
app.use('/api/v1/messages',msgRouter)
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

mongoose
	.connect(process.env.MONGODB_URI!)
	.then(() => {
		console.log(`Listening on port ${PORT}`);
		app.listen(PORT);
	})
	.catch((err: any) => {
		console.log('An error has ocurred while connecting to database:', err);
	});
  