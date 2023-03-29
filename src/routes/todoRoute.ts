import express from 'express';
import { TodoController as Todo } from '../controllers/todoController';

const app = express.Router();

const todo = new Todo();

app.get('/', todo.getAllTodo);
app.post('/todo/create', todo.addTodo);
app.put('/todo/status-update/:id', todo.updateTodoStatus);


export default app;