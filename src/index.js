import app from "./app.js"
import { PORT } from "./config/config.js";
import sequelize from './config/database.js';

app.listen(PORT,async function(){
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})