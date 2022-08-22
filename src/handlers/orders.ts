import { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

type Token = {
  user: {
    id: number;
  };
};
dotenv.config();
const { TOKEN_SECRET } = process.env;
const store = new OrderStore();

export const create = async (req: Request, res: Response) => {
  //Only create order if user provide token
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1];
    const decode = jwt.verify(token as string, TOKEN_SECRET as string) as Token;
    const order: Order = {
      status: req.body.status,
      user_id: decode.user.id,
    };
    const newOrder = await store.create(order);
    res.json({ order: { ...newOrder }, message: 'Created order successfully' });
  } catch (error) {
    res.status(404).json({ message: "Couldn't create order" });
  }
};
export const getOrderbyUserId = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1];
    const decode = jwt.verify(token as string, TOKEN_SECRET as string) as Token;
    const id = decode.user.id;
    const showOrder = await store.getOrderbyUserId(id);
    res.json({ showOrder, message: 'Retrieved order successfully' });
  } catch (error) {
    res.status(404).json({ message: "Couldn't get order" });
  }
};
export const addProduct = async (req: Request, res: Response) => {
  const product = {
    quantity: parseInt(req.body.quantity),
    productId: req.body.productId,
    orderId: parseInt(req.params.id),
  };
  try {
    const addToOrder = await store.addProduct(
      product.quantity,
      product.orderId,
      product.productId
    );
    res.json({
      Order: { ...addToOrder },
      message: 'Successfully added product to the order',
    });
  } catch (error) {
    res.status(400).json({ message: "Couldn't add product to order" });
  }
};
