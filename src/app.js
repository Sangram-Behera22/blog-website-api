import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './config/database.js';
const app = express();

(async () => {
    await sequelize.sync({ force: true });
})();

app.use(express.json({
    limit: "25kb"
}));
app.use(express.urlencoded({
     limit: "500kb"
}));
app.use(cors({
   origin : "*"
}));
app.use(express.static('../public'));




export default app;