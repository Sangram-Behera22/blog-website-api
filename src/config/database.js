import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} from "../config/config.js";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    post: DB_PORT,
    dialect: DB_DIALECT,
  });

export default sequelize;
