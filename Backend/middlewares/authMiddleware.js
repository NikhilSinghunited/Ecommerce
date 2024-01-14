import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; // Set the decoded user in the request object
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: 'Unauthorized Access',
    });
  }
};

// Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    console.log(user);
    if (!user || user.role !== 2) {
      return res.status(401).send({
        success: false,
        message: 'Unauthorized Access',
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
