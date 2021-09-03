'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstalledApps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  InstalledApps.init({
    user_id: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false
    },
    application_id: {
      type: DataTypes.STRING,
      references: {
        model: {
          tableName: 'Applications',
          schema: 'schema'
        },
        key: 'id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'InstalledApps',
  });
  return InstalledApps;
};

