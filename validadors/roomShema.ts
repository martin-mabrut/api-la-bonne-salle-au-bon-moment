import Joi from "joi";

export const roomSchema = Joi.object({
    name: Joi.string().required(),
    capacity: Joi.number().required()
});
