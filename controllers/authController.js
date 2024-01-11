import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../utils/authHelper.js';
import asyncHandler from 'express-async-handler';
import JWT from 'jsonwebtoken';
export const registerController = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, phone, role } = req.body;
    if (!name || !email || !password || !phone || !role) {
      return res.send({ error: 'Enter every Field Details' });
    }

    const user = await userModel.findOne({ email: email });
    console.log(user);

    if (user) {
      return res.status(200).send({
        success: false,
        message: 'Email already exists',
      });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      role: role,
    });

    res.status(200).send({
      success: true,
      message: 'User Registered Successfully',
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in registration',
      error: error,
    });
  }
});
