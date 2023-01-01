import {LocationMessage} from '../classes/message/LocationMessage'
import {TextMessage} from '../classes/message/TextMessage'
import {createMessage , deleteByIdArray} from "../repository/messages"
import {findChatById,insertNewMessageIdInChatById} from "../services/chat"

export async function newMessage (chatId : string, isReceived : boolean, text : string, latitude : string , longitude : string) {
    const chat = await findChatById(chatId)
    if(!chat) throw new Error('Chat not found')
    let message : object
    if(text) message = new TextMessage(isReceived,text)
    else message = new LocationMessage(isReceived,latitude,longitude)
    const msgCreated = await createMessage(isReceived,message)
    await insertNewMessageIdInChatById(chatId,String(msgCreated._id))
    return msgCreated
}

export async function findMessagesByChatId (chatId : string) {
    const chat = await findChatById(chatId)
    return chat.messagesList
}

export async function deleteMessagesByIdArray (messagesList : Array<object>) {
    return await deleteByIdArray(messagesList)
}