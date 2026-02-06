import { populateStorage } from "../factories/storage.js";
import { 
    createProject,
    deleteProject,
    getProject, 
    getTodo, 
    todoDependencies 
} from "../managers/projectManager.js";
import { createTodo } from "../managers/todoManager.js";
import { clearDisplay } from "./callDom.js";
import { 
    displayDescription,
    displayList,
    displayProjectForm, 
    displayProjectSelect, 
    displayTitle, 
    displayTodoEditBtn, 
    displayTodoEditPage, 
    displayTodoForm, 
    formAddBtn,
    listOfTodosToDisplay,
    todoDatePriority
} from "./displayUI.js";

export class Main_App {
    constructor(){
        this.project = '';
    }
    homePage(){
        clearDisplay("#content");
        displayTitle('home', 'Todo List');
        displayTodoForm("home");
        displayProjectForm();
        displayProjectSelect(todoDependencies.projects);
        formAddBtn('home');
        displayList(todoDependencies.projects, 'home');

        document.querySelector('#todo-add-home-btn').addEventListener('click', ()=>{
            const title = document.querySelector('#todo-title-home').value;
            const desc = document.querySelector('#todo-description-home').value;
            const dueDate = document.querySelector('#todo-duedate-home').value 
                ? formatDate(document.querySelector('#todo-duedate-home').value)
                : formatDate(new Date());
            const priority = document.querySelector('#todo-priority-home').value || 'Medium';
            const projectId =document.querySelector('#todo-project-home').value;

            createTodo({title, desc, dueDate, priority}, projectId);
            this.homePage();
        });

        document.querySelector(`#project-add-home-btn`).addEventListener('click', ()=>{
            const title = document.querySelector(`#project-title-home`).value;
            createProject(title);
            this.homePage();
        });

        const todoHome = document.querySelector(`#todo-home`);
        Array.from(todoHome.children).forEach(child => {
            child.children[0].addEventListener('click', ()=> {
                const projectId = child.children[0].dataset.projectId;
                this.projectPage(projectId);
            });
            if (child.children[1] && child.children[0].textContent !== "Default"){
                child.children[1].addEventListener('click', ()=> {
                    const projectId = child.children[0].dataset.projectId;
                    deleteProject(projectId);
                    this.homePage();
                });
            }
        });
    }
    projectPage(projectId){
        this.project = projectId;
        const project = getProject(projectId);

        clearDisplay('#content');
        displayTitle('project', project.title);
        displayTodoForm('project');
        listOfTodosToDisplay(project.id);

        document.querySelector(`#todo-add-project-btn`).addEventListener('click', ()=> {
            const title = document.querySelector('#todo-title-project').value;
            const desc = document.querySelector('#todo-description-project').value;
            const dueDate = document.querySelector('#todo-duedate-project').value
                    ? formatDate(document.querySelector('#todo-duedate-project').value)
                    : formatDate(new Date());
            const priority = document.querySelector('#todo-priority-project').value || 'Medium';
            const projectId =document.querySelector('#todo-project-home').value;
                    
            createTodo({title, desc, dueDate, priority}, projectId);
            this.projectPage(projectId);
        });
        const listProject = document.querySelector('#list-project');
        if (listProject){
            Array.from(listFolder.children).forEach(child => {
                child.children[0].addEventListener('click', () => {
                    const todoId = child.children[0].dataset.todoId;
                    this.todoPage(getTodo(todoId));
                });

                child.children[2].addEventListener('click', () => {
                    const todoId = child.children[0].dataset.todoId;
                    deleteTodo(todoId);
                    this.projectPage(this.project);
                    });
                });
        }
        document.querySelector('#project-back-btn').addEventListener('click', ()=> {
            this.homePage();
        });
    }
    todoPage(currentTodo){
        clearDisplay("#content");
        displayTitle('todo', currentTodo.title);
        displayTodoEditBtn();
        todoDatePriority(currentTodo.dueDate, currentTodo.priority);
        displayDescription(currentTodo.description);
        displayTodoEditBtn();

        document.querySelector('#todo-back-btn').addEventListener("click", ()=>{
            this.projectPage(this.project);
        });
        document.querySelector('#todo-edit-btn').addEventListener("click", ()=>{
            this.todoEditPage(currentTodo);
        });
    }
    todoEditPage(currentTodo){
        clearDisplay('#content');
        displayTodoEditPage(currentTodo);

        document.querySelector('#todo-edit-page-save-btn').addEventListener('click', () => {
            currentTodo.title = document.querySelector('#todo-edit-title').value;
            currentTodo.dueDate = document.querySelector('#todo-edit-duedate').value;
            currentTodo.priority = document.querySelector('#todo-edit-priority').value;
            currentTodo.description = document.querySelector('#todo-edit-description').value;

            populateStorage();
            this.todoPage(currentTodo);
        })
    }
}