const PORT = process.env.PORT || 4000;
const DB_NAME = process.env.DB_NAME || "web_blogger";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "password";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DIALECT = process.env.DB_DIALECT || "mysql";

export {
    PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_DIALECT
}