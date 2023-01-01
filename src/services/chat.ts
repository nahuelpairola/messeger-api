
import {createChat,findById,updateByChatId,insertMessageIdByChatId,deleteById, findAll} from "../repository/chats"

import {deleteMessagesByIdArray} from "../services/message"
import { createCustomer } from "./customer" 

import {Chat} from '../classes/chat/Chat'

import {ErrorNotFound} from '../errors/ErrorNotFound'

export async function newChat (isFavourite:boolean,firstName:string,lastName:string,role:string,data:string) {
    const customer = createCustomer(firstName,lastName,role,data)
    const chat = new Chat(isFavourite,customer)
    return await createChat(chat)
}

export async function findChatById (id : string) {
    const chat =  await findById(id)
    if(chat === null) throw new ErrorNotFound('Chat not found')
    return chat
}

export async function findAllChats () {
    return await findAll()
}

export async function insertNewMessageIdInChatById (chatId : string, msgId : string) {
    return await insertMessageIdByChatId(chatId,msgId)
}


export async function updateChat (id:string,isFavourite:boolean,firstName:string,lastName:string,role:string,data:string) {
    const chat = await findById(id)
    if(chat === null) throw new ErrorNotFound('Chat not found')
    const newCustomer = createCustomer(firstName,lastName,role,data)
    return await updateByChatId(id,isFavourite,newCustomer)
}

export async function deleteChatById (id : string) {
    const chat = await findById(id)
    if(!chat) throw new ErrorNotFound('Chat not found')
    await deleteMessagesByIdArray(chat.messagesList)
    await deleteById(id)
}