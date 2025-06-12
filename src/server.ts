import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error:', err);
  });
