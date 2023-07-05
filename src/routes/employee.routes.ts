import { Router } from "express";
import { inputValidation } from "../controllers/middleware/employee.validation.controller";
import { getAllEmployeesHandler, postEmployeeHandler, getEmployeeHandler, putEmployeeHandler, deleteEmployeeHandler } from "../controllers/employee.controller";

export const employeeRouter = Router();

employeeRouter.get("/", getAllEmployeesHandler);

employeeRouter.post("/", inputValidation, postEmployeeHandler);

employeeRouter.get("/:emp_id", getEmployeeHandler);

employeeRouter.put("/:emp_id", inputValidation, putEmployeeHandler);

employeeRouter.delete("/:emp_id", deleteEmployeeHandler);
