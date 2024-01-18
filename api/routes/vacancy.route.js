import express from 'express';
import { createVacancy,getVacancies,deleteVacancy,updateVacancy ,getVacancy} from '../controllers/vacancy.controller.js';
import { verifyToken } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create-vacancy', verifyToken, createVacancy);
router.get('/get-vacancies',getVacancies);
router.delete('/delete-vacancy/:id',verifyToken,deleteVacancy);
router.post('/update-vacancy/:id',verifyToken,updateVacancy);
router.get('/get-vacancy/:id',getVacancy);

export default router;