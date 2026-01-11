const renderProject = () => {
    const addProjectBtn = document.querySelector(".addProjectButton");
    const cancelBtn = createCancelBtn();
    let firstTap = true;

    addProjectBtn.addEventListener("click", ()=>{
        addButtonFunction(firstTap);
    });

    cancelBtn.addEventListener("click", ()=> {
        firstTapClear();
    });
}

const firstTapClear = () => {
    const label = document.querySelector(".project-label");
    const input = document.querySelector("#project-title");
    const cancelBtn = createCancelBtn();
    clearInput(label, input);
    firstTap = true;
    firstTap ? cancelBtn.style.display = "none" : cancelBtn.style.display = "block";
}

const displayInput = (label, input) => {
    label.style.display = "block";
    input.style.display = "block";
}

const createCancelBtn = () => {
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel");
    cancelBtn.textContent = "Cancel";
    
    return cancelBtn;
}

const clearInput = (label, input) => {
    label.style.display = "none";
    input.style.display = "none";
    input.value = "";
}

const addButtonFunction = (firstTap) => {
    const label = document.querySelector(".project-label");
    const input = document.querySelector("#project-title");
    const cancelBtn = createCancelBtn();

    if (firstTap){
        displayInput(label, input);
        firstTap = false;
        firstTap ? cancelBtn.style.display = "none" : cancelBtn.style.display = "block";
    }else {
        uiDisplay(input.value);
        firstTapClear();
    }
}

const uiDisplay = (projTitle) => {
    const newProj = addproj(projTitle);
    createProjectElements(newProj);
}

const createProjectElements = ({name, id}) => {
    const projectUl = document.querySelector(".project-ul");
    const card = document.createElement("div");
    card.classList.add("card");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = name;
    const div = document.createElement("div");
    const addBtn = addBtnProject();
    const deleteBtn = deleteBtnProject();

    li.appendChild(p);
    div.append(addBtn, deleteBtn);
    card.append(li, div);
    projectUl.appendChild(card);
}

const addBtnProject = () => {
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-button");
    addBtn.textContent = "Add To-do";

    return addBtn;
}

const deleteBtnProject = () => {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "Delete";

    return deleteBtn;
}