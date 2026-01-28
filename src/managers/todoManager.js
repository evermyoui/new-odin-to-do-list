import { Todo } from "../factories/todo.js"
import { todoDependencies } from "./projectManager.js";

const createTodo = ({title, description, priority}, projectId = null) => {
    const todo = new Todo(title, description, priority);

    if(projectId){
        const project = todoDependencies.projects.find(project => project.id === projectId);
        if (project) project.todos.push(todo);
    }
    return todo;
}

const deleteTodo = (todoId) => {
    const project = todoDependencies.projects
        .find(project => project.todos
        .some(todo => todo.id === todoId));
    if (!project) return;

    const index = project.todos.findIndex(todo => todo.id === todoId);
    project.todos.splice(index, 1);
}