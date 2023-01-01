import { Message } from "./Message"

export class TextMessage extends Message {
    text : string
    constructor(isReceived: boolean,text:string) {
        super(isReceived)
        this.text = text
    }
    setText(text:string):void{
        this.text = text
    }
    getText():string{
        return this.text
    }
}