import Joi from "joi";

export const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    roleId: Joi.number().required()
});

export const userUpdateSchema = Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    roleId: Joi.number()
});
