import {Request,Response,NextFunction} from 'express'

export async function notFoundMiddleware (req:Request,res:Response,next:NextFunction) {
    res.status(404).json('Route does not exist')
    next()
}