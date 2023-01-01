import {NextFunction, Request,Response} from 'express'
import { ErrorNotFound } from '../errors/ErrorNotFound'

export async function errorHandlerMiddleware (error:any,req:Request,res:Response,next:NextFunction) {
    let middlewareError = {
        message: error.message || 'Internal Server Error', 
        statusCode: 500
    }
    if(error instanceof ErrorNotFound) {
        middlewareError.statusCode = 404
    }
    if(error.error && error.error.isJoi) {
        middlewareError.message = error.error.toString().replace(/\"/g,'')
        middlewareError.statusCode = 400
    }
    console.log("Error Handling Middleware called")
    console.log('Path: ', req.path)
    console.log(error)

    return res.status(middlewareError.statusCode).json({
        success: false,
        message: middlewareError.message,
        data: null
    })
}