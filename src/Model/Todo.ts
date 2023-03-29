import { Schema, model } from "mongoose";

// structure of the todo
interface ITodo {
    title: string;
    completed: boolean
}


// define todoSchema
const todoSchema = new Schema<ITodo>({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true }
});


// create a model
const Todo = model<ITodo>('Todos', todoSchema);

// // retrieve all todos
export const getTodos = async() => {
    return await Todo.find();
}

// // add new todo
export const addTodo = async (title: string, compeleted: boolean = false) => {

    // construct new todo
    const todo = new Todo({
        title: title,
        completed: compeleted
    });

    await todo.save();

    return todo;
}

export const updateTodoState = async (id: string, status: boolean) => {
   return await Todo.findOneAndUpdate({_id: id}, { completed: status });    
}