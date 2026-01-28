import { 
    PRIORITY_LEVEL 
} from "../factories/todo.js";
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

    const priority = PRIORITY_LEVEL;
    priority.forEach(p => {
        loadElemToContainer(`#todo-priority-${page}`, 'option', `todo-pri`);
    })
}
