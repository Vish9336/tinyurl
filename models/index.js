// db.js
import { Sequelize } from 'sequelize';

// create a Sequelize instance
const sequelize = new Sequelize('postgres', 'postgres', 'Hello@123', {
  host: 'localhost',
  dialect: 'postgres', // or 'mysql', 'sqlite', etc.
});

// test the connection
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDB();

export default sequelize;
