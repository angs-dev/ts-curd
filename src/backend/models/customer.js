'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    Id: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER,
    Firstname: DataTypes.STRING,
    Lastname: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsTo(models.store, {
      foreginKey :'ID',
      as: 'store'
    })
  };
  return customer;
};