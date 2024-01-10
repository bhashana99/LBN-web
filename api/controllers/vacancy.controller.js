import {errorHandler} from "../utils/error.js";
import Vacancy from "../models/vacancy.model.js";

export const createVacancy = async (req, res, next) => {
    try {
        const vacancy = await Vacancy.create(req.body);
        return res.status(201).json(vacancy);
    } catch (error) {
        next(error);
    }
   
}