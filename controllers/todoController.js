const Todo = require("../models/todoModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getTodos = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const todos = await Todo.findOne({ _id: id });

  if (!todos) {
    return next(new AppError("Invalid user ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: todos,
  });
});

exports.createTodo = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      $push: { todos: req.body },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!todo) {
    return next(new AppError("Invalid user ID or todo ID", 404));
  }
  res.status(201).json({
    status: "success",
    data: todo,
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const todoId = req.params.todoId;
  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      $pull: { todos: { _id: todoId } },
    },
    {
      new: true,
    }
  );
  if (!todo) {
    return next(new AppError("No todo found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
  });
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const todoId = req.params.todoId;
  const todo = await Todo.findOneAndUpdate(
    { _id: id, "todos._id": todoId },
    {
      $set: { "todos.$": req.body },
    },
    {
      new: true,
    }
  );

  if (!todo) {
    return next(new AppError("No todo found with that ID", 404));
  }

  res.status(200).json(todo);
});
