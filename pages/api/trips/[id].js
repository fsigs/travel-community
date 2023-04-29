import { getTripById, deleteTrip, updateTrip } from '../../../services/tripService';
import connectDB from '../../../utils/db';

export default async function handler(req, res) {
  const {id} = req.query;
  await connectDB();
  if (req.method === 'GET') {
    const trip = await getTripById(id);
    res.status(200).json(trip);
  } else if (req.method === 'DELETE') { 
    const trip = await deleteTrip(id);
    res.status(200).json(trip);
  } else if (req.method === 'PUT') { 
    const { payload } = req.body;
    const trip = await updateTrip(id, payload);
    res.status(200).json(trip);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}