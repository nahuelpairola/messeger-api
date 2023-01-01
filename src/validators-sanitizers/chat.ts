import Joi from "joi"

const chatBody = Joi.object({
    isFavourite: Joi.boolean().required(),
    firstName: Joi.string().max(15).min(3).required(),
    lastName: Joi.string().max(15).min(3).required(),
    role: Joi.string().valid('vip','regular').required(),
    data: Joi.string()
        .when('role', { is: Joi.valid('vip'), then: Joi.string().creditCard()})
        .required()
})

const chatId = Joi.object({
    chatId: Joi.string().required()
})

export {
    chatBody,
    chatId,
}