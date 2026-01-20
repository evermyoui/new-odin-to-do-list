import { createTodo } from "./todo";

const todos = [];

export function addTodo(title){
    const todo = createTodo(title);
    todos.push(todo);
}
