// import { format } from "date-fns";

export class Todo{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = "";
        // this.dueDate = format(new Date(), 'dd-MMM-yyyy');
        this.priority = PRIORITY_LEVEL["Medium"];
    }
}

const PRIORITY_LEVEL = {
    "High" : 3,
    "Medium" : 2,
    "Low": 1
}