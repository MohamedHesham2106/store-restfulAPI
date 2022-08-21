import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
const { DB_HOST, DB_DATABASE, DB_DATABASE_TEST, DB_USER, DB_PASSWORD, ENV } =
  process.env;
let Client;
if (ENV === 'development') {
  Client = new Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
  });
}
if (ENV === 'test') {
  Client = new Pool({
    host: DB_HOST,
    database: DB_DATABASE_TEST,
    user: DB_USER,
    password: DB_PASSWORD,
  });
}
export default Client as Pool;
