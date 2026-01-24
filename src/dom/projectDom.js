import { 
    addProject,
    getProjects,
    removeProject,

} from "../managers/projectManager.js";

export const renderProjects = () => {
    setupAddProjectListener();
    displayProjects();
}

const setupAddProjectListener = () => {
    const addBtn = document.querySelector("#add-project-btn");
    addBtn.addEventListener("click", handleAddProject);
}

const displayProjects = () => {
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = '';

    getProjects().forEach(project => {
        const li = createProjectItem(project);
        projectList.appendChild(li);
    })
}

const createProjectItem = (project) => {
    const li = document.createElement("li");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = project.title;
    const deleteButton = deleteBtn(project.id);
    li.append(titleSpan, deleteButton);

    return li;
}

const deleteBtn = (projectId) => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete-btn";

    deleteButton.addEventListener("click", ()=> {
        removeProject(projectId);
        displayProjects();
    });

    return deleteButton;
}

// button functions
function handleAddProject(){
    const input = document.querySelector("#new-project");

    addProject(input.value);
    input.value = "";

    displayProjects();
}