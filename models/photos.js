'use strict';
module.exports = function(sequelize, DataTypes) {
  var photos = sequelize.define('photos', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    tags: DataTypes.TEXT,
    photo_date: DataTypes.STRING,
    photo_url: DataTypes.TEXT
  }, {

    uderscored: true,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return photos;
};