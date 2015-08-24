'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.addColumn(
      'photos',
      'photo_url',
      DataTypes.TEXT
    )
  }
};
