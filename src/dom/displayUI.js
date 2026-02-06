import { 
    PRIORITY_LABEL,
    PRIORITY_LEVEL 
} from "../factories/todo.js";
import { todoDependencies } from "../managers/projectManager.js";
import { 
    addAttributeToElem, 
    addTextToElem, 
    loadElemToContainer 
} from "./callDom.js";

export function displayTitle(page, title){
    loadElemToContainer('#content', 'div', `${page}-title-div`);
    if (title !== 'Todo List'){
        loadElemToContainer(`#${page}-title-div`, 'button', `${page}-back-btn`);
        addTextToElem(`${page}-back-btn`, "Back");
    }
    loadElemToContainer(`${page}-title-div`, "h1", `${page}-title`);
    addTextToElem(`${page}-title`, `${title}`);
}
export function displayTodoForm(page){
    loadElemToContainer('#content', 'div', `todo-form-${page}`);

    loadElemToContainer(`#todo-form-${page}`, 'label', `todo-title-${page}-label`);
    addAttributeToElem(`#todo-title-${page}-label`, 'for', `todo-title-${page}`);
    addTextToElem(`#todo-title-${page}-label`, 'Title');
    loadElemToContainer(`#todo-form-${page}`, 'input', `todo-title-${page}-input`);
    addAttributeToElem(`#todo-title-${page}-input`, 'type', 'text');
    addAttributeToElem(`#todo-title-${page}-input`, 'placeholder', 'New Todo');

    loadElemToContainer(`#todo-form-${page}`, `label`, `todo-duedate-${page}-label`);
    addAttributeToElem(`#todo-duedate-${page}-label`, 'for', `todo-duedate-${page}`);
    addTextToElem(`#todo-duedate-${page}-label`, `Due Date`);
    loadElemToContainer(`#todo-form-${page}`, 'input', `todo-duedate-${page}`);
    addAttributeToElem(`#todo-duedate-${page}`, 'type', `date`);

    loadElemToContainer(`#todo-form-${page}`, `label`, `todo-priority-${page}-label`);
    addAttributeToElem(`#todo-priority-${page}-label`, 'for', `todo-priority-${page}`);
    addTextToElem(`#todo-priority-${page}-label`, `Priority`);
    loadElemToContainer(`#todo-form-${page}`, 'select', `todo-priority-${page}`);
    addAttributeToElem(`#todo-priority-${page}`, 'name', `todo-priority-${page}`);

    const priority = Object.keys(PRIORITY_LEVEL);
    priority.forEach((p,i) => {
        loadElemToContainer(`#todo-priority-${page}`, 'option', `todo-priority-${page}-${p.toLowerCase()}`);
        addAttributeToElem(`#todo-priority-${page}-${p.toLowerCase()}`, 'value', p);
        if (i===1) addAttributeToElem(`#todo-priority-${page}-${p.toLowerCase()}`, 'selected', '');
        addTextToElem(`#todo-priority-${page}-${p.toLowerCase()}`, p);
    });

    loadElemToContainer(`#todo-form-${page}`, 'label', `todo-description-${page}-label`);
    addAttributeToElem(`#todo-description-${page}-label`, 'for', `todo-description-${page}`);
    addTextToElem(`#todo-description-${page}-label`, 'Description');
    loadElemToContainer(`#todo-form-${page}`, 'textarea', `todo-description-${page}`);
    addAttributeToElem(`#todo-description-${page}`, 'placeholder', 'Description');
    addAttributeToElem(`#todo-description-${page}`, 'rows', 3);
    if (page !== 'home') {
        loadElemToContainer(`#todo-form-${page}`, 'button', `todo-add-${page}-btn`);
        addTextToElem(`#todo-add-${page}-btn`, 'ADD');
    }
}

export function displayProjectForm() {
    loadElemToContainer('#content', 'div', 'project-div-home');
    loadElemToContainer('#project-div-home', 'label', 'project-title-home-label');
    addAttributeToElem('#project-title-home-label', 'for', 'project-title-home');
    addTextToElem('#project-title-home-label', 'Project Title');
    loadElemToContainer('#project-div-home', 'input', 'project-title-home');
    addAttributeToElem('#project-title-home', 'type', 'text');
    addAttributeToElem('#project-title-home', 'placeholder', 'New project');
    loadElemToContainer('#project-div-home', 'button', 'project-add-home-btn');
    addTextToElem('#project-add-home-btn', 'ADD Project');
}

export function displayProjectSelect(projects) {
    loadElemToContainer('#todo-form-home', 'label', 'todo-project-home-label');
    addAttributeToElem('#todo-project-home-label', 'for', 'todo-project-home');
    addTextToElem('#todo-project-home-label', 'Project');
    loadElemToContainer('#todo-form-home', 'select', 'todo-project-home');
    addAttributeToElem('#todo-project-home', 'name', 'todo-project-home');

    projects.forEach(project => {
        loadElemToContainer('#todo-project-home', 'option', `todo-project-home-${project.id}`);
        addAttributeToElem(`#todo-project-home-${project.id}`, 'value', project.id);
        addTextToElem(`#todo-project-home-${project.id}`, project.title);
    });
}

export function formAddBtn(page) {
    loadElemToContainer(`#todo-form-${page}`, 'button', `todo-add-${page}-btn`);
    addTextToElem(`#todo-add-${page}-btn`, 'ADD TODO');
}

export function displayList(projects, page){
    const projectId = `list-${page}`;
    if (!document.querySelector(`#${projectId}`)){
        loadElemToContainer("#content", 'div', projectId);
    }
    const container = document.querySelector(`#${projectId}`);
    container.innerHTML = "";

    projects.forEach(project => {
        const id = project.id;
        const title = project.title;
        const data = `data-project-id`;

        loadElemToContainer(`#${projectId}`, 'div', `${projectId}-${id}-div`);
        loadElemToContainer(`#${projectId}-${id}-div`, 'span', `${projectId}-${id}-text`);
        addAttributeToElem(`#${projectId}-${id}-text`, data, id);
        addTextToElem(`#${projectId}-${id}-text`, title);

        if (!(project.id !== "default")) {
            loadElemToContainer(`#${projectId}-${id}-div`, 'i', `${projectId}-${id}-del-btn`);
            addAttributeToElem(`#${projectId}-${id}-del-btn`, 'class', 'fa-solid fa-trash-can');
        }
    })
}

export function listOfTodosToDisplay(projectId){
    const project = todoDependencies.projects.find(project => project.id === projectId);
    if(!project) return;

    if (!document.querySelector('#list-project')){
        loadElemToContainer('#content', 'div', 'list-project');
    }
    project.todos.forEach(todo => {
    loadElemToContainer('#list-project', 'div', `list-project-${todo.id}-div`);
    addAttributeToElem(`#list-project-${todo.id}-div`, 'style', 
        `background-color: ${priorityColor(todo.priority)}`);
                
    loadElemToContainer(`#list-project-${todo.id}-div`, 'span', `list-project-${todo.id}-text`);
    addAttributeToElem(`#list-project-${todo.id}-text`, 'data-todo-id', todo.id);
    addTextToElem(`#list-project-${todo.id}-text`, todo.title);

    loadElemToContainer(`#list-project-${todo.id}-div`, 'span', `list-project-${todo.id}-duedate`);
    addTextToElem(`#list-project-${todo.id}-duedate`, todo.dueDate);

    loadElemToContainer(`#list-project-${todo.id}-div`, 'i', `list-project-${todo.id}-del-btn`);
    addAttributeToElem(`#list-project-${todo.id}-del-btn`, 'data-todo-id', todo.id);
    addAttributeToElem(`#list-project-${todo.id}-del-btn`, 'class', 'fa-solid fa-trash-can');  
    })
}

export function displayTodoEditBtn() {
    loadElemToContainer('#content', 'button', 'todo-edit-btn');
    addTextToElem('#todo-edit-btn', 'EDIT');
}

export function todoDatePriority(dueDate, priorityVal) {
    loadElemToContainer('#content', 'div', 'todo-info-div');
    loadElemToContainer('#todo-info-div', 'h2', 'todo-duedate');
    addTextToElem('#todo-duedate', `Due date: ${dueDate}`);

    const priorities = PRIORITY_LABEL;
    loadElemToContainer('#todo-info-div', 'h2', 'todo-priority');
    addTextToElem('#todo-priority', `Priority: ${priorities[priorityVal]}`);
}

export function displayDescription(description) {
    loadElemToContainer('#content', 'p', 'todo-description');
    addTextToElem('#todo-description', `Description: ${description || '(No description)'}`);
}

export function displayTodoEditPage(currentTodo) {
    loadElemToContainer('#content', 'label', 'todo-edit-page-title-label');
    addAttributeToElem('#todo-edit-page-title-label', 'for', 'todo-edit-title');
    addTextToElem('#todo-edit-page-title-label', 'Title:');
    loadElemToContainer('#content', 'input', 'todo-edit-title');
    addAttributeToElem('#todo-edit-title', 'type', 'text');
    addAttributeToElem('#todo-edit-title', 'value', currentTodo.title);

    loadElemToContainer('#content', 'label', 'todo-edit-page-duedate-label');
    addAttributeToElem('#todo-edit-page-duedate-label', 'for', 'todo-edit-duedate');
    addTextToElem('#todo-edit-page-duedate-label', 'Due date:');
    loadElemToContainer('#content', 'input', 'todo-edit-duedate');
    addAttributeToElem('#todo-edit-duedate', 'type', 'date');
    const dateValue = new Date(currentTodo.dueDate).toISOString().split('T')[0];
    addAttributeToElem('#todo-edit-duedate', 'value', dateValue);

    loadElemToContainer('#content', 'label', 'todo-edit-page-priority-label');
    addAttributeToElem('#todo-edit-page-priority-label', 'for', 'todo-edit-priority');
    addTextToElem('#todo-edit-page-priority-label', 'Priority:');
    loadElemToContainer('#content', 'select', 'todo-edit-priority');
    addAttributeToElem('#todo-edit-priority', 'name', 'todo-edit-priority');

    PRIORITY_LABEL.forEach((label, i) => {
    loadElemToContainer('#todo-edit-priority', 'option', `todo-edit-priority-${label.toLowerCase()}`);
    addAttributeToElem(`#todo-edit-priority-${label.toLowerCase()}`, 'value', i);
        if (i === currentTodo.priority) {
            addAttributeToElem(`#todo-edit-priority-${label.toLowerCase()}`, 'selected', '');
        }
        addTextToElem(`#todo-edit-priority-${label.toLowerCase()}`, label);
    });


    loadElemToContainer('#content', 'label', 'todo-edit-page-description-label');
    addAttributeToElem('#todo-edit-page-description-label', 'for', 'todo-edit-description');
    addTextToElem('#todo-edit-page-description-label', 'Description:');
    loadElemToContainer('#content', 'textarea', 'todo-edit-description');
    document.querySelector('#todo-edit-description').value = currentTodo.description;

    loadElemToContainer('#content', 'button', 'todo-edit-page-save-btn');
    addTextToElem('#todo-edit-page-save-btn', 'SAVE');
}