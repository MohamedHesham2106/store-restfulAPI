import { addProduct, create, getOrderbyUserId } from '../../handlers/orders';
import { Router } from 'express';

const orders = Router();
orders.post('/orders', create);
orders.get('/orders/:id', getOrderbyUserId);
orders.post('/orders/:id/products', addProduct);
export default orders;
