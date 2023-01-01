
import { Request, Response } from "express";

import { findAllChats, newChat, updateChat, deleteChatById } from "../services/chat";

export async function postChat (req : Request, res: Response) {
    const {isFavourite,firstName,lastName,role,data} = req.body
    const chat = await newChat(isFavourite,firstName,lastName,role,data)
    res.status(201).json({
        success: true,
        message: "Chat created successful",
        data: chat
    })
}

export async function putChat (req : Request, res: Response) {
    const {isFavourite,firstName,lastName,role,data} = req.body
    const {chatId} = req.params
    const chat = await updateChat(chatId,isFavourite,firstName,lastName,role,data)
    res.status(200).json({
        success:true,
        message: "Chat updated successful",
        data: chat
    })
}

export async function getChats (req : Request, res: Response) {
    const chats = await findAllChats()
    res.status(200).json({
        success: true,
        message: "Chats searched successful",
        data: chats
    })
}    

export async function deleteChat (req : Request, res: Response) {
    const {chatId} = req.params
    await deleteChatById(chatId)
    res.status(201).json({
        success: true,
        message: "Chat deleted successful",
        data : null
    })
}