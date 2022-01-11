import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import CategoriesRoutes from './routes/categories.routes.js';
import ProductsRoutes from './routes/products.routes.js';

dotenv.config();

const serverPort = process.env.PORT || 4000;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString);

const __dirname = process.cwd();

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api', [CategoriesRoutes, ProductsRoutes]);

server.use(express.static(path.join(__dirname, './client/dist')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
});

server.listen(serverPort, () =>
  console.log(`Server is started on port ${serverPort}`)
);
