import express, { RequestHandler } from 'express';
import Booking from '../models/Booking';
import { bookingSchema } from '../schemas/bookingSchema';

const router = express.Router();

// Create
router.post('/', (async (req, res) => {
  const result = bookingSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error);

  const booking = new Booking(result.data);
  await booking.save();
  res.status(201).json(booking);
}) as RequestHandler);

// Get All
router.get('/', (async (_, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
}) as RequestHandler);

// Get by ID
router.get('/:id', (async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).send('Not found');
    res.json(booking);
  } catch {
    res.status(400).send('Invalid ID');
  }
}) as RequestHandler);

// Delete
router.delete('/:id', (async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch {
    res.status(400).send('Invalid ID');
  }
}) as RequestHandler);

export default router; 