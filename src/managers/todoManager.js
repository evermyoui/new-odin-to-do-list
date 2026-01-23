import { Todo } from "../factories/todo.js";
const todos = [];

export function addTodo(title){
    const todo = new Todo(title);
    todos.push(todo);
}
export function getTodos(){
    return todos;
}
export const removeTodo = (todoId) => {
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index === -1) return;
    todos.splice(index, 1);
}