"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoState = exports.addTodo = exports.getTodos = void 0;
const mongoose_1 = require("mongoose");
// define todoSchema
const todoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true }
});
// create a model
const Todo = (0, mongoose_1.model)('Todos', todoSchema);
// // retrieve all todos
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Todo.find();
});
exports.getTodos = getTodos;
// // add new todo
const addTodo = (title, compeleted = false) => __awaiter(void 0, void 0, void 0, function* () {
    // construct new todo
    const todo = new Todo({
        title: title,
        completed: compeleted
    });
    yield todo.save();
    return todo;
});
exports.addTodo = addTodo;
const updateTodoState = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Todo.findOneAndUpdate({ _id: id }, { completed: status });
});
exports.updateTodoState = updateTodoState;
