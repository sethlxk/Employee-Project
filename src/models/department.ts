import { DataTypes } from "sequelize";
import { sequelize } from "../services/sequelize";
import { User } from "./user";

const { Model } = require("sequelize");

export class Department extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate() {
    // define association here
    this.hasMany(User, {foreignKey: 'departmentId', as:'users'})
  }
}
Department.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: "department_id",
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize(),
    modelName: "Department",
    tableName: "department",
  }
);
