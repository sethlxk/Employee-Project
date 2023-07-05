import { NextFunction, Request, Response } from "express";
import { Department } from "../../models/employee";

const Joi = require("joi");

export const ValidateInputsJOI = Joi.object({
  name: Joi.string().required(),
  salary: Joi.number().integer().required(),
  department: Joi.string()
    .valid(...Object.values(Department))
    .required(),
});

// validate if employee inputs are correct
export function inputValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const employeeJOI = ValidateInputsJOI.validate(
    {
      name: req.body.name,
      salary: req.body.salary,
      department: req.body.department,
    },
    { convert: false }
  ); //convert is set to false so '123' will not be converted to 123.
  if (!employeeJOI.error) {
    next();
  } else {
    res
      .status(400)
      .send({ errorMessage: employeeJOI.error.details[0].message });
  }
}
