import ChatModel from "../models/chat"
import{Chat} from '../classes/chat/Chat'

export async function createChat (chat:Chat) {
    return await ChatModel.create(
        {
            isFavourite:chat.isFavourite,
            customer:chat.customer
        })
}

export async function findById (id : string) { // get chat
    return await ChatModel.findOne({_id:id}).populate('messagesList')
}

export async function findAll () {
    const chats = await ChatModel.find({})
    return chats
}

export async function updateByChatId (id:string,isFavourite:boolean,customer:object) { // put chat endpoint 
    await ChatModel.findOneAndUpdate({_id:id},{
        isFavourite: isFavourite,
        customer: customer
    })
    return await ChatModel.findOne({_id:id})    
}

export async function insertMessageIdByChatId (chatId:string,msgId:string) {
    return await ChatModel.findByIdAndUpdate(chatId,{ $push : {messagesList:msgId}})
}

export async function deleteById (id: string) {
    return await ChatModel.findByIdAndDelete(id)
}
