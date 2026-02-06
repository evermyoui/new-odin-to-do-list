import { Main_App } from "./dom/mainApp.js";
import { populateDependencies } from "./factories/storage.js";
import { todoDependencies } from "./managers/projectManager.js";
import "./style.css";

populateDependencies();
const app = new Main_App();
app.homePage();

window.app = app;
window.todoDependencies = todoDependencies;