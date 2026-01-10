import Storage from "./storage";

export default class Project {
    constructor(id, name){
        this.id = id;
        this.name = name.trim() === "" ? "Unnamed Project" : name;
        this.todos = [];
        this.storage = new Storage();
    }
    addTodo(todo){
        this.todos.push(todo);
        this.sync();
    }
    removeToDo(todoID){
        this.todos = this.todos.filter(t => todoID !== t.id);
        this.sync();
    }
    getToDo(todoID){
        return this.todos.find(t => t.id === todoID);
    }
    listToDos(){
        return [...this.todos];
    }
    sync(){
        this.storage.save("allTodos", this.todos);
    }
}