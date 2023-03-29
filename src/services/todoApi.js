import axios from 'axios'

// Set config defaults 
const instance = axios.create({
    baseURL: 'http://localhost:4000'
});

// request data from server
export const getTodos = async () => {
    return await instance.get('/').then((res) => {
        return res.data;
    })
}

// add new todo
export const addTodo = async ({ title, completed }) => {
    return await instance.post('/todo/create', { title, completed }).then((res) => {
        return res.data;
    })
}

// update todo status
export const updateTodoStatus = async ({ id, status }) => {
    return await instance.put(`/todo/status-update/${id}`, { status }).then((res) => {
        return res.data;
    })
}