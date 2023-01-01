import { Customer } from "./Customer"

export class VipCustomer extends Customer{
    creditCard : string
    role: string
    constructor(firstName:string,lastName:string,creditCard:string) {
        super(firstName,lastName)
        this.role = 'vip'
        this.creditCard = creditCard
    }
    setCreditCard (creditCard: string) : void {
        this.creditCard = creditCard
    }
    getCredictCard () : string {
        return this.creditCard
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