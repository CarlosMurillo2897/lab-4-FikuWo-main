import express from 'express';
import {
  authUser,
  getUsers,
  registerUser,
  logoutUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .put(protect, updateUserProfile);

router.route('/users')
  .get(protect, admin, getUsers);

export default router;
