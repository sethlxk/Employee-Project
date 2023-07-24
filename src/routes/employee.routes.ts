import { Router } from "express";
import { inputValidation } from "../controllers/middleware/employee.validation.controller";
import { getAllEmployeesHandler, postEmployeeHandler, getEmployeeHandler, putEmployeeHandler, deleteEmployeeHandler } from "../controllers/employee.controller";
import { verifyToken, verifyTokenNoReq} from "../controllers/middleware/verifyToken";

export const employeeRouter = Router();

employeeRouter.get("/", verifyToken, getAllEmployeesHandler);

employeeRouter.post("/", verifyTokenNoReq, inputValidation, postEmployeeHandler);

employeeRouter.get("/:emp_id", getEmployeeHandler);

employeeRouter.put("/:emp_id", verifyTokenNoReq, inputValidation, putEmployeeHandler);

employeeRouter.delete("/:emp_id", verifyTokenNoReq, deleteEmployeeHandler);


