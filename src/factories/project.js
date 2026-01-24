export class Project{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title.trim() || "Unnamed Project";
        // this.dueDate = format(new Date(), 'dd-MMM-yyyy');
    }
}