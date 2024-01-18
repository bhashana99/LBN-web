import { errorHandler } from "../utils/error.js";
import Vacancy from "../models/vacancy.model.js";

export const createVacancy = async (req, res, next) => {
  try {
    const vacancy = await Vacancy.create(req.body);
    return res.status(201).json(vacancy);
  } catch (error) {
    next(error);
  }
};

export const getVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find();
    if (!vacancies) return next(errorHandler(404, "No vacancies found"));
    res.status(200).json(vacancies);
  } catch (error) {
    next(error);
  }
};

export const deleteVacancy = async (req, res, next) => {
  const vacancy = await Vacancy.findById(req.params.id);

  if (!vacancy) {
    return next(errorHandler(404, "Vacancy not found"));
  }

  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Vacancy deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateVacancy = async (req, res, next) => {
  const vacancy = await Vacancy.findById(req.params.id);
  if (!vacancy) {
    return next(errorHandler(404, "Vacancy not found"));
  }

  try {
    const updateVacancy = await Vacancy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateVacancy);
  } catch (error) {
    next(error);
  }
};

export const getVacancy = async (req, res, next) => {
    try {
        const vacancy = await Vacancy.findById(req.params.id);
        if(!vacancy) return next(errorHandler(404,"Vacancy not found"));
        res.status(200).json(vacancy);
    } catch (error) {
        next(error);
    }
}