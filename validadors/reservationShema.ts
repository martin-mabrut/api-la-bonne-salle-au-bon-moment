import Joi from "joi";

export const reservationSchema = Joi.object({
userId: Joi.number().required(),
roomId: Joi.number().required(),
date_debut: Joi.date().required(),
date_fin: Joi.date().required()
});

export const reservationUpdateSchema =
  Joi.object({
      userId: Joi.number(),
      roomId: Joi.number(),
      date_debut: Joi.date(),
      date_fin: Joi.date()
  });