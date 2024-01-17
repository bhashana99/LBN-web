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

export const getVacancies = async (req, res, next) => {
    try {
        const vacancies = await Vacancy.find();
        if(!vacancies) return next(errorHandler(404, "No vacancies found"));
         res.status(200).json(vacancies);
    } catch (error) {
        next(error);
    }
}