const { DataTypes } = require("sequelize");
const db = require("../db");

const Log = db.define("log", {
  description: {
    type: DataTypes.STRING,
  },
  definition: {
    type: DataTypes.STRING,
    },
  result: {
    type: DataTypes.STRING,
     },
  owner: {
    type: DataTypes.INTEGER,
   },
});

module.exports = Log;
