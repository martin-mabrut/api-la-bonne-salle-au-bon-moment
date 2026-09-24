import Joi from "joi";

export const roomSchema = Joi.object({
    name: Joi.string().required(),
    capacity: Joi.number().required()
});

export const roomUpdateSchema = Joi.object({
    name: Joi.string(),
    capacity: Joi.number()
});
