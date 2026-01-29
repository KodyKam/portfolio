// server/controllers/auth.controller.js
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import User from '../models/User.model.js';
import config from '../config/config.js';
import bcrypt from 'bcryptjs';

// ----------------- SIGNUP -----------------
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ error: 'Email is already taken.' });

    const user = new User({ name, email, password }); // <- plain password, model hashes it
    await user.save();
    res.status(201).json({ message: 'Signup successful! Please sign in.' });
  } catch (err) {
    res.status(500).json({ error: 'Error signing up user.' });
  }
};

// ----------------- SIGNIN -----------------
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'User not found.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Email and password don't match." });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Error signing in user.' });
  }
};

// ----------------- SIGNOUT -----------------
export const signout = (req, res) => {
  res.clearCookie('t');
  res.status(200).json({ message: 'Signed out successfully.' });
};

// ----------------- PROTECTED ROUTE MIDDLEWARE -----------------
export const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  userProperty: 'auth',
});