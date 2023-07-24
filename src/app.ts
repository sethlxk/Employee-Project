import express from "express";
import { sequelize } from "./services/sequelize";
import { employeeRouter } from "./routes/employee.routes";
import { userRouter } from "./routes/user.routes";

const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
app.use(express.json()); //pass json encoded objects
app.use(cors());
app.use(cookieParser());
app.use('/employee', employeeRouter);

app.use('/user', userRouter);

app.listen(8000, () => {
  sequelize().authenticate();
  console.log("Application listening on http://localhost:8000");
});
