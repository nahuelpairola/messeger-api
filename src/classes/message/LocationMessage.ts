import {Message} from './Message'

export class LocationMessage extends Message {
    latitude : string
    longitude : string
    constructor (isReceived: boolean, latitude : string, longitude : string) {
        super(isReceived)
        this.latitude=latitude
        this.longitude=longitude
    }
    getLocation () : object {
        return {latitude:this.latitude,longitude:this.longitude}
    }
    setLocation (latitude:string,longitude:string) : void {
        this.latitude = latitude
        this.longitude = longitude
    }
}