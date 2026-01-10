import { format } from "date-fns";
export default class Todo{
    constructor(title, description, priorityKey = 1, day, month, year){
        this.id = crypto.randomUUID();
        this.title = title.trim() === "" ? "Unnamed Todo" : title;
        this.description = description;
        const due = day && month && year ? new Date(year, month -1, day) : new Date();
        this.dueDate = due;
        this.priority = setPriority(priorityKey);
        this.isCompleted = false;
    }
    setTitle(newTitle){
        this.title = newTitle.trim() === "" ? "Unnamed Todo" : newTitle;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }
    changeDueDate({day, month, year}){
        const today = new Date();
        const newDate = new Date(year, month-1, day);
        if (today > newDate) return;
        this.dueDate = format(newDate, "dd-MM-yyyy");
    }
    changePriority(key){
        this.priority = setPriority(key);
    }
    completedTodo(){
        this.isCompleted = !this.isCompleted;
    }
}

function setPriority(key){
    const map = new Map();
    map.set(1, "Low");
    map.set(2, "Medium");
    map.set(3, "High");

    return map.get(key) || "Low";
}