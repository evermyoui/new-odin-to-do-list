export class Project{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title;
        // this.dueDate = format(new Date(), 'dd-MMM-yyyy');
    }
}