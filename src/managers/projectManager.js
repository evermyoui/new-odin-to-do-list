import { Project } from "../factories/project.js";
import { populateStorage } from "../factories/storage.js";

export const todoDependencies = (()=> {
    const defaultProject = {
        id: "default",
        title: "Default Project",
        get todos(){
            return todoDependencies.projects.flatMap(project => project.todos);
        }
    }
    const projects = [defaultProject];

    return {
        defaultProject,
        projects
    }
})();

export const createProject = (title) => {
    todoDependencies.projects.push(new Project(title));
    populateStorage();
}

export const deleteProject = (projectId) => {
    const project = todoDependencies.projects.find(project => project.id === projectId);
    if (project){
        const todosDelete = [...project.todos];
        todosDelete.forEach(todo => deleteTodo(todo.id));

        const index = todoDependencies.folders.indexOf(project);
        todoDependencies.folders.splice(index, 1);
    }
    populateStorage();
}
export const getTodo = (todoId) => {
    return todoDependencies.defaultProject.todos.find(todo => todo.id === todoId);
}

export const getProject = (projectId) => {
    return todoDependencies.projects.find(project => project.id === projectId);
}