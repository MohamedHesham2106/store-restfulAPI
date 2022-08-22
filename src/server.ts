import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 3000;
// create an instance server
const app: Application = express();
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// HTTP request logger middleware
app.use(morgan('short'));


app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

//Storefront Route
app.use('/store', routes);

// start express server
app.listen(PORT, () => {
  console.log(`server running on  http://localhost:${PORT}`);
});

export default app;
