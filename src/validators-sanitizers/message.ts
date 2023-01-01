import Joi from "joi"

const messageBody = Joi.object({
    isReceived: Joi.boolean().required(),
    text: Joi.string().max(250).min(5).optional(),
    latitude: Joi.string().optional().when('text', { is: Joi.exist(), then: Joi.forbidden()}),
    longitude: Joi.required().when('text', { is: Joi.exist(), then: Joi.forbidden()})
}).and('latitude','longitude')

export {
    messageBody
}