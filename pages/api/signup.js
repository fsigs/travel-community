import connectDB from '../../utils/db';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectDB();
  
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

