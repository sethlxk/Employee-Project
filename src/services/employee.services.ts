import { Department, Employee } from "../models_ts/employee_ts";

export function getEmployeeService() {
  return new Promise(async (resolve, reject) => {
    //generally when we have async functions we use a try catch block
    try {
      const employees = await Employee.findAll();
      resolve(employees);
    } catch (error) {
      //catch here is for example when there is a connection error to database
      reject(error);
    }
  });
}

export function postEmployeeService(
  name: string,
  salary: number,
  department: Department
) {
  return new Promise(async (resolve, reject) => {
    try {
      const newEmployee = await Employee.create({ name, salary, department });
      resolve(newEmployee);
    } catch (error) {
      reject(error);
    }
  });
}

export function getEmployeeIDService(id: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const employee = await Employee.findOne({
        where: { id: parseInt(id) },
      });
      resolve(employee);
    } catch (error) {
      reject(error);
    }
  });
}

export function putEmployeeService(
  id: string,
  name: string,
  salary: number,
  department: Department
) {
  return new Promise(async (resolve, reject) => {
    try {
      const employee = await Employee.findOne({
        //try to find the employee
        where: { id: parseInt(id) },
      });
      if (!employee) {
        //employee id does not exist
        resolve(404);
      }
      if (
        //employee details are the same
        employee.name === name &&
        employee.salary === salary &&
        employee.department === department
      ) {
        resolve(304);
      }
      employee.name = name;
      employee.salary = salary;
      employee.department = department;
      await employee.save();
      resolve(employee);
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteEmployeeIDService(id: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const employee = await Employee.findOne({
        where: { id: parseInt(id) },
      });
      if (!employee) {
        resolve(404); //employee id does not exist
      }
      await employee.destroy();
      resolve(204);
    } catch (error) {
      reject(error);
    }
  });
}
