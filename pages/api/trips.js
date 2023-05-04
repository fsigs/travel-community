import { listTrips, createTrip } from '../../services/tripService';
import connectDB from '../../utils/db';

export default async function handler(req, res) {
  await connectDB();
  if (req.method === 'GET') {
    const { page = 1, ...filters } = req.query;
    const trips = await listTrips(page, filters);
    res.status(200).json(trips);
  } else if (req.method === 'POST') {
    const payload = req.body;
    const trip = await createTrip(payload);
    res.status(200).json(trip);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}