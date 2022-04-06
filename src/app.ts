import express from 'express';

import 'dotenv/config';

import { ErrorHandler } from './middlewares/errors';

import { userRouter, productRouter, orderRouter } from './routers';

const app = express();

app.use(express.json());

app.use(userRouter);

app.use(productRouter);

app.use(orderRouter);

app.use(ErrorHandler);

export default app;
