'use strict';
module.exports = function(sequelize, DataTypes) {
  var photos = sequelize.define('photos', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    tags: DataTypes.TEXT,
    date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return photos;
};