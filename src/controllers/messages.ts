import {Request, Response} from 'express';
import { newMessage , findMessagesByChatId } from '../services/message';

export async function postMsg (req: Request, res: Response) {
    const {chatId} = req.params
    const {isReceived,text,latitude,longitude} = req.body
    const message = await newMessage(chatId,isReceived,text,latitude,longitude)
    res.status(201).json({
        success: true,
        message: 'Message created successful',
        data: message
    })
}

export async function getMsg (req : Request, res : Response) {
    const {chatId} = req.params
    const messages = await findMessagesByChatId(chatId)
    res.status(200).json({
        success: true,
        message: 'Messages searched successful',
        data: messages
    })
}