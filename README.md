# test-api

## Information

test-api is a little message service to implement easely between a company and customers.



## How to run it locally?

Step by step, how to run it locally in your machine:

1. Clone the repository
2. Open VSCode and load the folder project
3. Open a new __cmd__ and run:
```
npm install
```
4. Create a new file named __.env__ and inside of it insert:
```
MONGODB_URI=<db link for connecting>
```
5. In __cmd__ run the command:
```
npm run start
```
6. Use it in port __http://localhost:3000/api/v1__

## Endpoints

### CRUD Chat
- POST _URL_/api/v1/chats : create new chat.

    - Request: The body request __must contain__:
        - _isFavourite_: Set chat as favourite __true__ or not, __false__.
        - _firstName_: Customer first name.
        - _lastName_: Customer last name.
        - _role_: Customer role; __vip__ or __regular__.
        - _data_: __credit card number__ if role is __vip__. __Phone number__ if role is __regular__.
    - Response status code: 201
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: contain the created chat
- GET _URL_/api/v1/chats : get all chats.
    - Response status code: 200
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: contains the searched chats
- PUT _URL_/api/v1/chats/_{chatId}_ : update chat data.
    - Request Params: chatID: chat id to update
    - Request Body:
        - _isFavourite_: 
        - _firstName_: Customer first name.
        - _lastName_: Customer last name.
        - _role_: Customer role; __vip__ or __regular__.
        - _data_: __credit card number__ if role is __vip__. __Phone number__ if role is __regular__.
    - Response status code: 200
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: contain the updated chat
- DELETE _URL_/api/v1/chats/_{chatId}_:
    - Request Params: chatId: chat id to delete
    - Response status code: 200
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: null


### CRUD Message
- POST _URL_/api/v1/messages/_{chatId}_
    - Request Body: 
        - _isReceived_: __true__ when the customer send it, __false__ when the company send it.
        - Content option: __text__ or __latitude__ and __longitude__ (customer position).
            - _text_: Message text, with minimal length equal to 5 and maximal length 250.
            - _latitude_: customer latitude position.
            - _longitude_: customer longitude position.
    - Response status code: 201
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: message created
- GET _URL_/api/v1/messages/_{chatId}_
    - Request : none
    - Response status code: 200
    - Response Body:
        - _success_: true
        - _message_: response message
        - _data_: array with all chats messages

### Erros:

#### 404 Not Found

Response in case the url is not valid

- Response status code: 404
- Response Body:
    - _success_: false
    - _message_: Route does not exists


#### Bad Request

If some request param or bady data is wrong or not valid, the response will be not successful.

- Response status code: 400
- Response Body:
    - _success_: false
    - _message_: response message with error explanation
