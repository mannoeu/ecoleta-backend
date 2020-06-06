import { celebrate, Joi } from "celebrate";

const validate = celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().max(15),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
      items: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
  }
);

export default validate;
