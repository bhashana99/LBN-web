import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRouter from "./routes/admin.route.js";
import cookieParser from "cookie-parser";
import vacancyRouter from "./routes/vacancy.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running port 3000");
});

app.use("/api/admin", adminRouter);
app.use("/api/vacancy", vacancyRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
