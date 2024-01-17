import express from 'express';
import { createVacancy,getVacancies } from '../controllers/vacancy.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create-vacancy', verifyToken, createVacancy);
router.get('/get-vacancies',getVacancies);

export default router;