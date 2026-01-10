export default class Project {
    constructor(id, name){
        this.id = id;
        this.name = name.trim() === "" ? "Unnamed Project" : name;
        this.todos = [];
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    removeToDo(todoID){
        this.todos = this.todos.filter(t => todoID !== t.id);
    }
    getToDo(todoID){
        return this.todos.find(t => t.id === todoID);
    }
    listToDos(){
        return [...this.todos];
    }
}