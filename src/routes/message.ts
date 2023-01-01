import express from 'express';
const msgRouter = express.Router()
const validator = require('express-joi-validation').createValidator({passError:true})

import {getMsg, postMsg} from "../controllers/messages"

import { messageBody } from '../validators-sanitizers/message'
import { chatId } from '../validators-sanitizers/chat';

msgRouter.route('/:chatId')
    .get(validator.params(chatId),getMsg)
    .post(validator.body(messageBody),validator.params(chatId),postMsg)

export {msgRouter}