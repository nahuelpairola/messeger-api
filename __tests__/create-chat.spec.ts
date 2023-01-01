
const request = require('supertest')
const url = 'http://localhost:3000/api/v1'

// create chat no favourite with vip customer
describe('POST URL/chats', () => { 
    const body = {
        isFavourite: false,
        firstName: 'Tony',
        lastName: 'Stark',
        role: 'vip',
        data: '1454544569863265' // credit card number
    }
    it('Creating a new chat', async () => {
        const response = await request(url).post('/chats').send(body)

        expect(response.statusCode).toBe(201)
        expect(response.body.data.isFavourite).toBeFalsy()
        expect(response.body.data.customer.firstName).toBe('Tony')
        expect(response.body.data.customer.lastName).toBe('Stark')
        expect(response.body.data.customer.role).toBe('vip')
        expect(response.body.data.customer.creditCard).toEqual(body.data)
        expect(response.body.data.messagesList.length).toEqual(0)
        expect(response.body.data.id).toBeDefined()

        // delete chat created
        const deleteResp = await request(url).delete(`/chats/${response.body.data.id}`)
        expect(deleteResp.body.success).toBeTruthy()
        expect(deleteResp.body.data).toBeNull()
        expect(deleteResp.body.message).toBeDefined()
    })
})

// create chat favourite with regular customer
describe('POST URL/chats', () => { 
    const body = {
        isFavourite: true,
        firstName: 'Tony',
        lastName: 'Stark',
        role: 'regular',
        data: '1454544569863265' // phone number
    }
    it('Creating a new chat', async () => {
        const response = await request(url).post('/chats').send(body)

        expect(response.statusCode).toBe(201)
        expect(response.body.data.isFavourite).toBeTruthy()
        expect(response.body.data.customer.firstName).toBe('Tony')
        expect(response.body.data.customer.lastName).toBe('Stark')
        expect(response.body.data.customer.role).toBe('regular')
        expect(response.body.data.customer.phoneNumber).toEqual(body.data)
        expect(response.body.data.messagesList.length).toEqual(0)
        expect(response.body.data.id).toBeDefined()

        // delete chat created
        const deleteResp = await request(url).delete(`/chats/${response.body.data.id}`)
        expect(deleteResp.body.success).toBeTruthy()
        expect(deleteResp.body.data).toBeNull()
        expect(deleteResp.body.message).toBeDefined()
    })
})

// create chat with favourite no boolean
describe('POST URL/chats', () => {
    const body = {
        isFavourite: 1, // bad 
        firstName: 'Tony',
        lastName: 'Stark',
        role: 'vip',
        data: '1454544569863265' // credit card number
    }
    it('Checking isFavourite different then boolean', async () => {
        const response = await request(url).post('/chats').send(body)

        expect(response.statusCode).toBe(400)
        expect(response.body.success).toBe(false)
        expect(response.body.data).toBeNull()
        expect(response.body.message).toBeDefined()
    })
})

// create chat with no firstName
describe('POST URL/chats', () => {
    const body = {
        isFavourite: false, 
        lastName: 'Stark',
        role: 'vip',
        data: '1454544569863265' // credit card number
    }
    it('Checking isFavourite different then boolean', async () => {
        const response = await request(url).post('/chats').send(body)

        expect(response.statusCode).toBe(400)
        expect(response.body.success).toBe(false)
        expect(response.body.data).toBeNull()
        expect(response.body.message).toBeDefined()
    })
})
