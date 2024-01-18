import express from 'express';
import { createVacancy,getVacancies,deleteVacancy } from '../controllers/vacancy.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create-vacancy', verifyToken, createVacancy);
router.get('/get-vacancies',getVacancies);
router.delete('/delete-vacancy/:id',deleteVacancy);

export default router;