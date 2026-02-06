import { populateStorage } from "../factories/storage.js";
import { Todo } from "../factories/todo.js"
import { todoDependencies } from "./projectManager.js";

export const createTodo = ({title, description, dueDate, priority}, projectId = null) => {
    if (!title) return;
    const todo = new Todo(title, description, dueDate, priority);
    if(projectId){
        const project = todoDependencies.projects.find(project => project.id === projectId);
        if (project) project.todos.push(todo);
    }
    populateStorage();
    return todo;
}

const deleteTodo = (todoId) => {
    const project = todoDependencies.projects
        .find(project => project.todos
        .some(todo => todo.id === todoId)); 
    if (!project) return;

    const index = project.todos.findIndex(todo => todo.id === todoId);
    project.todos.splice(index, 1);
    populateStorage();
}