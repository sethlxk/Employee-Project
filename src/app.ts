import express from "express";
import { routes } from "./routes/routes";
import { sequelize } from "./services/sequelize";

const app = express();
app.use(express.json()); //pass json encoded objects

routes(app);

app.listen(8000, () => {
  sequelize().authenticate();
  console.log("Application listening on http://localhost:8000");
});
