import {
  create,
  filterByCategory,
  index,
  remove,
  update,
} from '../../handlers/products';
import { Router } from 'express';

const products = Router();
products.get('/products', index);
products.post('/products', create);
products.put('/products/:id', update);
products.delete('/products/:id', remove);
products.get('/products/filter', filterByCategory);
export default products;
