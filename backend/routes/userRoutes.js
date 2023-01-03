import express from 'express';
import { authUser, RegisterUser, getUserProfile, UpdateUserProfile, getUsers, deleteUser, getUserById, updateUser } from '../controllers/userController.js';
const router = express.Router();
import { protect, admin } from '../middleware/authmiddleware.js';

router
    .route('/')
    .post(RegisterUser)
    .get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, UpdateUserProfile)
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router;