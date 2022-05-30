import Router from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';

const router = new Router();

// /api/auth/registration
router.post(
  '/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Pasword must be longer than 6 and shorter 12').isLength({
      min: 6,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exist` });
      }

      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPassword });
      await user.save();
      return res.status(201).json({ message: 'User was created' });
    } catch (e) {
      console.log(e);
      res.send({ message: 'Server error' });
    }
  },
);

export default router;
