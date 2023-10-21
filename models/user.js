"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      this.hasMany(models.photo);
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Required",
          },
          // allowNull: false
        },
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      hooks: {
        beforeCreate: (user) => {
          const hashedPassword = hashPassword(user.password);
          user.password = hashedPassword;
        },
      },
    }
  );
  return user;
};
