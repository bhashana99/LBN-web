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
    if (!validUser) return await next(errorHandler(404, "Admin not found!!"));
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


export const updateAdmin = async (req, res, next) => {
  if (req.admin.id !== req.params.id)
  return next(errorHandler(401, "You can only update your own account!"));
try {
  if (req.body.password) {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  const updatedAdmin = await Admin.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username: req.body.username,
        
        password: req.body.password,
        avatar: req.body.avatar,
      },
    },
    { new: true }
  );

  const { password, ...rest } = updatedAdmin._doc;

  res.status(200).json(rest);
} catch (error) {
  next(error);
}
}
