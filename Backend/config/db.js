// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      // other options...
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
