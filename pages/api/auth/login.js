import connectDB from '../../../utils/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if user with given email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }

      // Check if password matches
      const passwordMatches = user.comparePassword(password);
      if (!passwordMatches) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


   
