import express from "express";
import { sequelize } from "./services/sequelize";
import { employeeRouter } from "./routes/employee.routes";

const app = express();
app.use(express.json()); //pass json encoded objects

app.use('/employee', employeeRouter);

app.listen(8000, () => {
  sequelize().authenticate();
  console.log("Application listening on http://localhost:8000");
});
