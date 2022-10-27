const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

let todos = [];

router.get("/todos", (req, res, next) => {
  res.json({ todos: todos });
});

router.post("/todos", bodyParser.json(), (req, res, next) => {
  const newTodo = { id: new Date().toISOString(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({ message: "Todo created", todo: newTodo });
});

router.put("/todos/:todoId", bodyParser.json(), (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "Updated todo!" });
  }
  res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("/todos/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  res.status(200).json({ message: "Todo deleted!" });
});

module.exports = router;
