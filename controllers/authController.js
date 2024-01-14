import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../utils/authHelper.js';
import asyncHandler from 'express-async-handler';
import JWT from 'jsonwebtoken';
import { requireSignIn } from '../middlewares/authMiddleware.js';
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
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        mssage: 'Invalid email or password',
      });
      console.log(res);
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        sucess: false,
        message: 'Email is not registered',
      });
    }
    const match = await comparePassword(password, user.password);
    console.log(match);
    if (!match) {
      return res.status(200).send({
        sucess: false,
        message: 'Invalid Passord',
      });
    }
    //token generate
    const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '365d',
    });
    res.status(200).send({
      sucess: true,
      message: 'login sucessfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: False,
      message: 'Erro in Login',
      error,
    });
  }
};
export const testController = asyncHandler(async (req, res) => {
  console.log('protected ');
  return res.send('Protected Routes');
});
