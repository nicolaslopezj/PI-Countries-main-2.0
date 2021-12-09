const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.INTEGER,
    }, //(Entre 1 y 5)
    duration: {
      type: DataTypes.INTEGER,
    }, //(En minutos)
    season: {
      type: DataTypes.STRING,
    } //(Verano, Otoño, Invierno o Primavera)
  });
};
