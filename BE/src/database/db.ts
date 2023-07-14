import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/my-database', {
      
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

export default connectDatabase;