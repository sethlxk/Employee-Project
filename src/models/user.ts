import { DataTypes } from "sequelize";
import { sequelize } from "../services/sequelize";
import { Department } from "./department";

const { Model } = require("sequelize");
export class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate() {
    this.belongsTo(Department, {
        foreignKey: 'departmentId',
        as: 'departments'
    })
  }
}
User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: "user_id",
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize: sequelize(),
    modelName: "User",
    tableName: "users",
  }
);
