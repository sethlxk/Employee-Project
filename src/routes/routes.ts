import { Express } from "express";
import {
  deleteEmployeeHandler,
  getEmployeeHandler,
  getEmployeeIDHandler,
  postEmployeeHandler,
  putEmployeeHandler,
} from "../controllers/employee.controller";
import { postEmployeeValidate } from "../controllers/employee.request.controller";

export function routes(app: Express) {
  app.get("/employee", getEmployeeHandler);

  app.post("/employee", postEmployeeValidate, postEmployeeHandler);

  app.get("/employee/:emp_id", getEmployeeIDHandler);

  app.put("/employee/:emp_id", postEmployeeValidate, putEmployeeHandler);

  app.delete("/employee/:emp_id", deleteEmployeeHandler);
}
