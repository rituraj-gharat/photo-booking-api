import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  location: String,
});

export default mongoose.model('Booking', bookingSchema);
