import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from './routes/authRoute.js';

dotenv.config();
connectDB(process.env.MONGODB_URI);
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
