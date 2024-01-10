// server.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to e-commerce app',
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} ${PORT}`);
});