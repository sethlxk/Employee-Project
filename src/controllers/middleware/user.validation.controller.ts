import { NextFunction, Request, Response } from "express";

const Joi = require("joi");

export const ValidateInputsJOI = Joi.object({
  username: Joi.string().required(),
  departmentId: Joi.number().integer().valid(1,2,3).required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});

export function userInputValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userJOI = ValidateInputsJOI.validate(
    {
      username: req.body.username,
      departmentId: req.body.departmentId,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    },
  ); 
  if (!userJOI.error) {
    next();
  } else {
    res
      .status(400)
      .send({ errorMessage: userJOI.error.details[0].message });
  }
}
