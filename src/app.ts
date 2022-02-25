import 'dotenv/config';

import express from 'express';

import UserRoutes from './user';

const app = express();

app.use(express.json());

app.use(UserRoutes);

export default app;
