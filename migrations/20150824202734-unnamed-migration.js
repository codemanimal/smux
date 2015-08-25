'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.renameColumn(
      'photos',
      'date',
      'photo_date',
      DataTypes.STRING
    )
  }
};
