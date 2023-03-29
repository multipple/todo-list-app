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
exports.TodoController = void 0;
const Todo_1 = require("../Model/Todo");
class TodoController {
    getAllTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield (0, Todo_1.getTodos)();
            res.json(todos);
        });
    }
    addTodo(req, res) {
        const { title, completed } = req.body;
        const todos = (0, Todo_1.addTodo)(title, completed);
        res.json(todos);
    }
    // deleteTodo(req: Request, res: Response) {
    //     // const { title } = req.params;
    //     // return res.json(deleteTodo(title));
    // }
    // updateTodo(req: Request, res: Response) {
    //     // const { title } = req.params;
    //     // const { newTitle } = req.body;
    //     // return res.json(updateTodo(title, newTitle));
    // }
    updateTodoStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        return res.json((0, Todo_1.updateTodoState)(id, status));
    }
}
exports.TodoController = TodoController;
