import { Project } from "../factories/project.js";

const projects = [];

export const addProject = (title) => {
    const project = new Project(title);
    projects.push(project);
}

export const changeDueDate = (projectId, date) => {
    const project = projects.find(project => project.id === projectId);
    if(!project) return;
    project.dueDate = date;
}

export const getProjects = () => {
    return projects;
}

export const removeProject = (projectId) => {
    const index = projects.findIndex(project => project.id === projectId);
    if (index === -1) return;
    projects.splice(index, 1);
}