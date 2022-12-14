import Client from '../database';

export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
};
export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not return products from database: ${error}`);
    }
  }
  async show(id: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM products WHERE id = ${id}`;
    
      const result = await conn.query(sql);
      conn.release();
   
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not return product with id ${id} from database: ${error}`
      );
    }
  }
  async create(p: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `INSERT INTO products (name, description, price,category) VALUES ('${p.name}', '${p.description}', ${p.price},'${p.category}') RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not create product: ${error}`);
    }
  }
  async update(p: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `UPDATE products SET name = '${p.name}', description = '${p.description}', price = ${p.price}, category = '${p.category}' WHERE id=${p.id} RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not update product: ${error}`);
    }
  }
  async delete(id: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `DELETE FROM products WHERE id=${id} RETURNING *`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not delete with id ${id} product: ${error}`);
    }
  }
  async filterByCategory(category: string): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM products WHERE category='${category}'`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Could not find product by category ${category}: ${error}`
      );
    }
  }
}
