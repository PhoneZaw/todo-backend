const express = require("express");
const app = express();
const Todo = require("./models/todoModel");
const authController = require("./controllers/authController");
const globalErrorHandler = require("./controllers/errorController");

const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/v1/users/:id/todos", authController.protect);
app.use("/api/v1/users", todoRouter);

//for admin
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
