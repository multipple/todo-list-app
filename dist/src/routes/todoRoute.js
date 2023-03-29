"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const app = express_1.default.Router();
const todo = new todoController_1.TodoController();
app.get('/', todo.getAllTodo);
app.post('/todo/create', todo.addTodo);
app.put('/todo/status-update/:id', todo.updateTodoStatus);
exports.default = app;
