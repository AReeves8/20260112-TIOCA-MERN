import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route.js'

const app = express();

// localhost:PORT/api/v1/products
//const BASE_APP_URI = process.env.BASE_APP_URI;        // dotenv isn't configured yet so this won't pull in the variable

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', productRoutes);

export default app;