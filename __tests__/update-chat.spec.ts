
const request = require('supertest')
const url = 'http://localhost:3000/api/v1'

describe('PUT URL/chats/{chatId}', () => { 
    
    const body = {
        isFavourite: true,
        firstName: 'Tony',
        lastName: 'Stark',
        role: 'regular',
        data: '1454544569863265' // phone number
    }

    const bodyForUpdating = { // changes in body
        isFavourite: false,
        firstName: 'Nahuel',
        lastName: 'Pairola',
        role: 'regular',
        data: '+543564668436' // credit card to phone number
    }

    it('Creating chat and updating it', async () => {
        const response = await request(url).post('/chats').send(body)

        expect(response.statusCode).toBe(201)
        expect(response.body.data.isFavourite).toBeTruthy()
        expect(response.body.data.customer.firstName).toBe('Tony')
        expect(response.body.data.customer.lastName).toBe('Stark')
        expect(response.body.data.customer.role).toBe('regular')
        expect(response.body.data.customer.phoneNumber).toEqual(body.data)
        expect(response.body.data.messagesList.length).toEqual(0)
        expect(response.body.data.id).toBeDefined()

        // Updating chat by chatId
        const responseUpdated = await request(url).put(`/chats/${response.body.data.id}`).send(bodyForUpdating)
        expect(responseUpdated.statusCode).toBe(200)
        expect(responseUpdated.body.data.isFavourite).toBeFalsy()
        expect(responseUpdated.body.data.customer.firstName).toBe('Nahuel')
        expect(responseUpdated.body.data.customer.lastName).toBe('Pairola')
        expect(responseUpdated.body.data.customer.role).toBe('regular')
        expect(responseUpdated.body.data.customer.phoneNumber).toEqual(bodyForUpdating.data)
        expect(responseUpdated.body.data.messagesList.length).toEqual(0)
        expect(responseUpdated.body.data.id).toBeDefined()

        // delete chat created
        const deleteResp = await request(url).delete(`/chats/${responseUpdated.body.data.id}`)
        expect(deleteResp.body.success).toBeTruthy()
        expect(deleteResp.body.data).toBeNull()
        expect(deleteResp.body.message).toBeDefined()
    })
})
