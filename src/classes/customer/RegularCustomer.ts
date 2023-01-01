import { Customer } from "./Customer"

export class RegularCustomer extends Customer{
    phoneNumber : string
    role:string
    constructor(firstName:string,lastName:string,phoneNumber : string) {
        super(firstName,lastName)
        this.phoneNumber = phoneNumber
        this.role = 'regular'
    }
    setPhoneNumber (phoneNumber : string) : void {
        this.phoneNumber = phoneNumber
    }
    getPhoneNumber () : string {
        return this.phoneNumber
    }
    setFirstName(firstName:string) : void {
        this.firstName = firstName
    }
    getFirstName():string{
        return this.firstName
    }
    setLastName(lastName:string) : void{
        this.lastName = lastName
    }
    getLastName():string{
        return this.lastName
    }
    getRole():string{
        return this.role
    }
}
