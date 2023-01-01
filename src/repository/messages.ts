import MessageModel from "../models/message";

export async function createMessage (isReceived : boolean, content: object) {
    return await MessageModel.create({
        isReceived: isReceived,
        content
    })
}

export async function findMessageById (id : string) {
    return await MessageModel.findById(id)
}

export async function deleteByIdArray (msgId : Array<object>) {
    return await MessageModel.deleteMany({_id: {"$in" : msgId}})
}