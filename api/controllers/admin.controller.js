import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";

export const createAdmin = async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newAdmin = new Admin({ username, password: hashedPassword });

  try {
    await newAdmin.save();
    res.status(201).json("Admin created successfully!!");
  } catch (error) {
    next(error);
  }
};
