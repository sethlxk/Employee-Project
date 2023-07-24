import { Request, Response } from "express";
import {
  deleteEmployee,
  getEmployee,
  getAllEmployees,
  createEmployee,
  updateEmployee,
} from "../services/employee.services";
import { Employee } from "../models/employee";

const departmentMap = new Map<number, string>([
  [1, "Admin"],
  [2, "PS"],
  [3, "HR"],
]);

export async function getAllEmployeesHandler(req: Request, res: Response) {
  try {
    let employees = (await getAllEmployees()) as Array<Employee>;
    const sortedEmployees = [...employees];
    sortedEmployees.sort((a: Employee, b: Employee) => a.id - b.id);
    employees = sortedEmployees;
    if (req.body.department === 1) {
      res.send(employees);
    } else {
      employees = employees.filter(
        (employee) =>
          employee.department === departmentMap.get(req.body.department)
      );
      res.send(employees);
    }
  } catch (e) {
    res.status(500).send({ errorMessage: "server error" });
  }
}

export async function postEmployeeHandler(req: Request, res: Response) {
  try {
    const employee = await createEmployee(
      req.body.name,
      req.body.salary,
      req.body.department
    ); //create the employee object
    res.send(employee);
  } catch (e) {
    res.status(500).send({ errorMessage: "server error" });
  }
}

export async function getEmployeeHandler(req: Request, res: Response) {
  try {
    const employeeByID = await getEmployee(req.params.emp_id);
    if (employeeByID) {
      return res.send(employeeByID);
    } else {
      return res.status(404).send({ errorMessage: "ID does not exist" });
    }
  } catch (e) {
    return res.status(500).send({ errorMessage: "server error" });
  }
}

export async function putEmployeeHandler(req: Request, res: Response) {
  //once i enter this function i know the details have been validated
  try {
    const employee = await updateEmployee(
      req.params.emp_id,
      req.body.name,
      req.body.salary,
      req.body.department
    );
    if (typeof employee === "number" && employee === 404) {
      return res.status(404).send({ errorMessage: "ID does not exist" });
    } else if (typeof employee === "number" && employee === 304) {
      res.statusMessage = "no change";
      return res.sendStatus(304);
    } else {
      res.send(employee);
    }
  } catch (e) {
    return res.status(500).send({ errorMessage: "server error" });
  }
}

export async function deleteEmployeeHandler(req: Request, res: Response) {
  try {
    const statusCode = await deleteEmployee(req.params.emp_id);
    if (statusCode === 404) {
      return res.status(404).send({ errorMessage: "ID does not exist" });
    } else if (statusCode === 204) {
      res.statusMessage = "sucessful delete operation";
      return res.sendStatus(204);
    }
  } catch (e) {
    return res.status(500).send({ errorMessage: "server error" });
  }
}
