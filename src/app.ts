import 'dotenv/config';

import express from 'express';

import UserRoutes from './user';

import ProductRoutes from './product';

import OrderRoutes from './order';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.use(ProductRoutes);

app.use(OrderRoutes);

export default app;
