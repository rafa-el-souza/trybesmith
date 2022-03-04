import 'dotenv/config';

import express from 'express';

import UserRoutes from './user';

import ProductRoutes from './product';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.use(ProductRoutes);

export default app;
