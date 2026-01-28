import { getProject } from "../managers/projectManager.js";
import { displayTitle } from "./displayUI.js";

export class Main_App {
    constructor(){
        this.project = '';
    }
    homePage(){
        displayTitle('home', 'Todo List');
    }
    projectPage(projectId){
        this.project = projectId;
        const project = getProject(projectId);
        displayTitle('project', project.title);
    }
    todoPage(currentTodo){
        displayTitle('todo', currentTodo.title);
    }
}