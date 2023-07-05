import { DataTypes } from "sequelize";
import { sequelize } from "../services/sequelize";

export enum Department {
  HR = "HR",
  PS = "PS",
}

const { Model } = require("sequelize");

export class Employee extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
  toJSON() {
    return { ...this.get(), createdAt: undefined, updatedAt: undefined };
  }
}
Employee.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    department: {
      type: DataTypes.ENUM("HR", "PS"),
    },
  },
  {
    sequelize: sequelize(),
    tableName: "employees",
    modelName: "Employee",
  }
);
