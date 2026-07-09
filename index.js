import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productsRoutes from './src/routes/products.routes.js';
import notFoundMiddleware from './src/middlewares/notFound.middleware.js';
import authRoutes from './src/routes/auth.routes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use(authRoutes);

app.use('/api/products', productsRoutes);

app.use(notFoundMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});