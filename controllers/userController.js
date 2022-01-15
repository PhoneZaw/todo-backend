const Todo = require("../models/todoModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await Todo.find();

  res.status(200).json({
    status: "success",
    data: users,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  // const id = req.params.id;
  // const user = await Todo.findById(id);

  // if (!user) {
  //   return next(new AppError("Invalid user ID", 404));
  // }

  // res.status(200).json({
  //   status: "success",
  //   data: user,
  // });
  res.status(500).json({
    status: "error",
    data: "This route is not yet defined!",
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  // const user = await Todo.create(req.body);
  // res.status(201).json({
  //   status: "success",
  //   data: user,
  // });
  res.status(500).json({
    status: "error",
    data: "This route is not yet defined!",
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  // const user = await Todo.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  //   runValidators: true,
  // });

  // if (!user) {
  //   return next(new AppError("Invalid user ID", 404));
  // }

  // res.status(201).json({
  //   status: "success",
  //   data: user,
  // });

  res.status(500).json({
    status: "error",
    data: "This route is not yet defined!",
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  // const user = await Todo.findByIdAndDelete(req.params.id);

  // if (!user) {
  //   return next(new AppError("Invalid user ID", 404));
  // }

  // res.status(204).json({
  //   status: "success",
  //   data: null,
  // });

  res.status(500).json({
    status: "error",
    data: "This route is not yet defined!",
  });
});
