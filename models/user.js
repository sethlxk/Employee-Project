'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.NUMBER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    departmentId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};