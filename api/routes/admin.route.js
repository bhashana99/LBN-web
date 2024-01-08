import express from 'express';
import {createAdmin,loginAdmin} from '../controllers/admin.controller.js';


const router = express.Router();

router.post('/create-admin',createAdmin);
router.post('/login-admin',loginAdmin);

export default router;