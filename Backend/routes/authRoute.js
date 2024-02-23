import express from 'express';
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/register', registerController);
router.post('/login', loginController);
//forget password || POST
router.post('/forgot-password', forgotPasswordController);
router.get('/test', requireSignIn, isAdmin, testController);
//protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
