
module.exports = (sequelize, DataTypes) => {
  const CarBrand = sequelize.define('CarBrand', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false 
  });

  return CarBrand;
};
