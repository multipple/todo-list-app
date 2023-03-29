import { Request, Response } from 'express';
import {  addTodo, getTodos, updateTodoState } from '../Model/Todo';


export class TodoController {

  async  getAllTodo(req: Request, res: Response) {
        const todos = await getTodos();
        res.json(todos);
    }

    addTodo(req: Request, res: Response): void {

        const { title, completed } = req.body;
        const todos = addTodo(title, completed);
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

    updateTodoStatus(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;

        
        return res.json(updateTodoState(id,status));
    }
}