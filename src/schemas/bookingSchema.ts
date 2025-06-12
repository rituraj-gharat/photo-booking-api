import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  date: z.string(), // ISO string format
  location: z.string().min(3),
});

export type BookingInput = z.infer<typeof bookingSchema>;
