import path from 'path';
import express from 'express';
import bookingRoutes from './routes/bookingRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve frontend from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Root route → serve index.html
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api/bookings', bookingRoutes);

export default app;
