import { todoDependencies } from "../managers/projectManager";
import { Project } from "./project";
import { Todo } from "./todo";
const storageAvail = (type) => {
    try {
        const storage = window[type];
        const x = '--storage-test--';
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }catch(e){
        return false;
    }
}
export const populateStorage = () => {
    if (storageAvail("localStorage")){
        localStorage.setItem("todoDatas", JSON.stringify(todoDependencies.projects.filter(project => project.id !== "default")));
    }
}

export const populateDependencies = () => {
    if (storageAvail("localStorage")){
        if (localStorage.getItem("todoDatas")== null){
            populateStorage();
        }else {
            const savedDatas = JSON.parse(localStorage.getItem("todoDatas"));
            // 1 for keeping the default project.
            todoDependencies.projects.length = 1;

            savedDatas.forEach(p => {
                const project = new Project(p.title);
                project.id = p.id;
                project.todos = p.todos.map(t => {
                    const todo = new Todo(t.title, t.description, t.priority);
                    todo.id = t.id;
                    return todo;
                });
                todoDependencies.projects.push(project);
            })
        }
    }
}