import Joi from "joi";

export const roleSchema = Joi.object({
    label: Joi.string().required()
});