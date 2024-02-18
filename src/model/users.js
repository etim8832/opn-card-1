const Joi = require('joi');

const userRegisterSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    date_of_birth: Joi.date().iso().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    address: Joi.string().required(),
    subscriber_status: Joi.string().valid('active', 'inActive').required(),
  });

  const editUserSchema = Joi.object({
    id: Joi.string().required(),
    date_of_birth: Joi.date().iso().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    address: Joi.string().required(),
    subscriber_status: Joi.string().valid('active', 'inActive').required(),
  });


  const changePasswordSchema = Joi.object({
    id: Joi.string().required(),
    new_password: Joi.string().required(),
    curren_password: Joi.string().required(),
  });
  

module.exports = {
    userRegisterSchema,
    editUserSchema,
    changePasswordSchema
};
