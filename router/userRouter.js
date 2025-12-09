import express from 'express';
import {
  getUser,
  getUserId,
  createUser,
  createUserModal,
  logUser,
  updateUser,
  getCurrentUser,
  getUserCount
} from '../controller/userController.js';
import AuthMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/loggedUser', AuthMiddleware, getCurrentUser);

router.get('/', AuthMiddleware, getUser);
router.get('/count', getUserCount);
router.get('/:id', AuthMiddleware, getUserId);
router.post('/register', createUser);
router.post('/modal', createUserModal);
router.post('/login', logUser);
router.put('/:id', AuthMiddleware, updateUser);

router.post('/logout', (req, res) => {
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'strict', secure: false });
  return res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
