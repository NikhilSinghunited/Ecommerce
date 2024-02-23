import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../utils/authHelper.js';
import asyncHandler from 'express-async-handler';
import JWT from 'jsonwebtoken';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

export const registerController = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, answer, phone, role } = req.body;
    if (!name || !email || !password || !phone || !role || !answer) {
      return res.send({ message: 'Enter every Field Details' });
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
      answer: answer,
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

export const forgotPasswordController = asyncHandler(async (req, res) => {
  try {
    console.log('hi');
    const { email, answer, newPassword } = req.body;
    console.log(req.body);

    if (!email) {
      return res.status(404).send({
        success: false,
        message: 'Enter email',
      });
    }

    if (!answer) {
      return res.status(404).send({
        success: false,
        message: 'Enter question',
      });
    }

    if (!newPassword) {
      return res.status(401).json({
        success: false,
        message: 'Enter new password',
      });
    }

    const user = await userModel.findOne({ email, answer });
    console.log(user);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found in the database',
      });
    }

    const hashed = await hashPassword(newPassword);
    console.log(hashed);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });

    res.status(200).send({
      success: true,
      message: 'Password Reset Successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
});
export const testController = asyncHandler(async (req, res) => {
  console.log('protected ');
  return res.send('Protected Routes');
});
