import { format } from "date-fns";

export class Todo{
    constructor(title, description = "", priority = "Medium"){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(), 'dd-MMM-yyyy');
        this.priority = PRIORITY_LEVEL[priority];
    }
}

export const PRIORITY_LEVEL = {
    "High" : 0,
    "Medium" : 1,
    "Low": 2
}
export const PRIORITY_LABEL = ['High', 'Medium', 'Low'];