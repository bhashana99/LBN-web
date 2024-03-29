import express from 'express';
import {createAdmin,loginAdmin,updateAdmin,signOut} from '../controllers/admin.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';


const router = express.Router();

router.post('/create-admin',createAdmin);
router.post('/login-admin',loginAdmin);
router.post('/update-admin/:id',verifyToken,updateAdmin);
router.get('/signout',signOut);

export default router;