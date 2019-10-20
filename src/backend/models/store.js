'use strict';
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define('store', {
    ID: DataTypes.INTEGER,
    Phone: DataTypes.STRING,
    Name: DataTypes.STRING,
    Domain: DataTypes.STRING,
    Status: DataTypes.STRING,
    Street: DataTypes.STRING,
    State: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  store.associate = function(models) {
    // associations can be defined here
    store.hasMany(models.customer, {
      foreginKey :'StoreId',
      as: 'storeData'
    })
  };
  return store;
};