import express from 'express';
const chatRouter = express.Router()
const validator = require('express-joi-validation').createValidator({passError:true})

import {
    postChat,
    getChats,
    putChat,
    deleteChat,
} from "../controllers/chats"

import {chatId,chatBody} from '../validators-sanitizers/chat'

chatRouter.route('/:chatId')
    .delete(validator.params(chatId),deleteChat)
    .put(validator.params(chatId),validator.body(chatBody),putChat)

chatRouter.route('')
    .get(getChats)
    .post(validator.body(chatBody),postChat)

export {chatRouter}