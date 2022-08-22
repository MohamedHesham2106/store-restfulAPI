import { Pool } from 'pg';
import config from './config';
const { PORT, HOST, DATABASE, USER, PASSWORD } = config;
const Client = new Pool({
  host: HOST,
  port: parseInt(PORT as string, 10),
  database: DATABASE,
  user: USER,
  password: PASSWORD,
});

export default Client;
