const { DataTypes } = require("sequelize");

const Model = (sequelize) => {
  return sequelize.define("parties", {
    //컬럼 정의
    party_num: {
      type: DataTypes.INTEGER,
      allowNull: false, //NOT NULL
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    party_location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    head_count: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    start_time: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    party_location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });
};

module.exports = Model;
