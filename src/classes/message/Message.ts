export abstract class Message {
    isReceived : boolean
    constructor(isReceived:boolean){
        this.isReceived = isReceived
    }
}