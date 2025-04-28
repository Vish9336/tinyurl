// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const tinyurl = sequelize.define('tinyurl', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shorturl: {
    type: DataTypes.STRING,
  }
});

// // Create the table automatically if not exists
// await tinyurl.sync();

export default tinyurl;
