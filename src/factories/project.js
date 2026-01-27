export class Project{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title.trim() || "Unnamed Project";
        // this.dueDate = format(new Date(), 'dd-MMM-yyyy');
        this.todos = [];
    }
    // changeProjectTitle(newTitle){
    //     this.title = newTitle;
    //     if (!this.title.trim()){
    //         this.title = "Unnamed Project";
    //     }
    // }
    // changeDueDate(newDate){
    //     this.dueDate = newDate;
    // }
    // addTodoToProject(todo){
    //     this.todos.push(todo);
    // }
    // removeTodoFromProject(todoId){
    //     const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
    //     if (!todo) return;

    //     this.todos.splice(todoIndex, 1);
    // }
}