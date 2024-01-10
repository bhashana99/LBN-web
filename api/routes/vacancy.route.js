import express from 'express';
import { createVacancy } from '../controllers/vacancy.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create-vacancy', verifyToken, createVacancy);

export default router;