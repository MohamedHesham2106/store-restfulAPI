import bcrypt from 'bcrypt';
import Client from '../database';
import * as dotenv from 'dotenv';

dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

export type User = {
  id?: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT id,email,username,firstname,lastname FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Couldn't get users from database: ${error}`);
    }
  }
  async show(id: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT id,email,username,firstname,lastname FROM users WHERE id = ${id}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Couldn't get users with id ${id} from database: ${error}`
      );
    }
  }
  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS as string)
      );
      const sql = `INSERT INTO users (email,username, firstname, lastname, password) VALUES ('${u.email}', '${u.username}', '${u.firstname}', '${u.lastname}', '${hash}') RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Couldn't create user: ${error}`);
    }
  }
  async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect();
    const sql = `SELECT * FROM users WHERE username='${username}'`;

    const result = await conn.query(sql);

    if (result.rows.length) {
      const user = result.rows[0];

      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
        return user;
      }
    }

    return null;
  }
}
