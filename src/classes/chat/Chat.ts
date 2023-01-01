import {Customer} from '../customer/Customer'

export class Chat {
    isFavourite : boolean
    customer:Customer
    messagesList: Array<string>
    constructor(isFavourite:boolean,customer:Customer) {
        this.isFavourite = isFavourite
        this.customer=customer
        this.messagesList = []
    }
    public setFavourite() : void {
        this.isFavourite = true
    }
    public setNotFavourite() : void {
        this.isFavourite = false
    }
    insertMessage(messageId:string) : void{
        this.messagesList.push(messageId)
    }
    getMessages():Array<string>{
        return this.messagesList
    }
    deleteAllMessages():void{
        this.messagesList = []
    }
}