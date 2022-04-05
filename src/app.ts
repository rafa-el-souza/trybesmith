import 'dotenv/config';

import express from 'express';

import { userRouter, productRouter, orderRouter } from './routers';

const app = express();

app.use(express.json());

app.use(userRouter);

app.use(productRouter);

app.use(orderRouter);

export default app;
