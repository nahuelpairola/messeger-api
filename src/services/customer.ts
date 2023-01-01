
import {VipCustomer} from '../classes/customer/VipCustomer'
import {RegularCustomer} from '../classes/customer/RegularCustomer'

export function createCustomer (firstName:string,lastName:string,role:string,data:string){
    if(role==='vip') return new VipCustomer(firstName,lastName,data)
    else return new RegularCustomer(firstName,lastName,data)
}