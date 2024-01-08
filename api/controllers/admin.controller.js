import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

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

export const loginAdmin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const validUser = await Admin.findOne({ username });
    if (!validUser) return await next(errorHandler(404, "User not found!!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credential!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};
