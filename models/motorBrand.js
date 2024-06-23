
module.exports = (sequelize, DataTypes) => {
  const MotorBrand = sequelize.define('MotorBrand', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false 
  });

  return MotorBrand;
};
