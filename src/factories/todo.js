// import { format } from "date-fns";

export class Todo{
    constructor(title, description = "", priority = 2){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        // this.dueDate = format(new Date(), 'dd-MMM-yyyy');
        this.priority = priority;
    }
    // changeTitle(newTitle){
    //     this.title = newTitle;
    // }
    // changeDescription(newDescription){
    //     this.description = newDescription;
    // }
    // changePriority(level){
    //     this.priority = PRIORITY_LEVEL[level];
    // }
}

const PRIORITY_LEVEL = {
    "High" : 3,
    "Medium" : 2,
    "Low": 1
}