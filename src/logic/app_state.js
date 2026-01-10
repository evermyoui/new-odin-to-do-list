import Storage from "./storage";

export default class Controller {
    constructor(){
        this.projects = [];
        this.deletedProject = [];
        this.activeProject = null;
        this.storage = new Storage();
    }
    addProject(project){
        this.projects.push(project);
        this.sync();
    }
    setActiveProjectById(id){
        this.activeProject = this.projects.find(p => p.id === id) || null;
    }
    deleteProject(projectID){
        this.deletedProject.push(this.projects.find(p => p.id === projectID));
        this.projects = this.projects.filter(p => p.id !== projectID);
        if(this.activeProject && this.activeProject.id === projectID){
            this.activeProject = null;
        }
        this.sync();
    }
    getActiveProject(){
        return this.activeProject;
    }
    sync(){
        this.storage.save("allProject", this.projects);

    }
}