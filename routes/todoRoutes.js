const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router
  .route("/:id/todos")
  .get(todoController.getTodos)
  .post(todoController.createTodo);

router
  .route("/:id/todos/:todoId")
  .delete(todoController.deleteTodo)
  .patch(todoController.updateTodo);

module.exports = router;
