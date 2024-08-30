//         THIS IS SERVER SIDE VALIDATION USING JOI MODULE
const Joi = require("joi");

const signupValidation = (req, res, next) => {
  // this is going to be the middleware
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const{error} = schema.validate(req.body);  // req ki body  ko validate krega 

  if(error){
        return res.status(400)
    .json({message:"Bad request", error})
  }
  next();
  //   Iske baad hum db k andr operations perform krenge
};

// Validation for login
const loginValidation = (req, res, next) => {
    // this is going to be the middleware
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
  
    const{error} = schema.validate(req.body);  // req ki body  ko validate krega 
  
    if(error){
          return res.status(400)
      .json({message:"Bad request", error})
    }
    next();
  };

  module.exports = {
    signupValidation,
    loginValidation
  }
