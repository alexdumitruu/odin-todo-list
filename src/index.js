import "./styles.css";
import { renderModule } from './ui.js';
import { storageModule } from "./storage.js";
import { controllerModule } from "./appLogic.js";

document.addEventListener('DOMContentLoaded', () => {
    const loaded = storageModule.loadState();
    console.log('Loaded from storage:', loaded);
    if (loaded && loaded.length) {
        controllerModule.setProjects(loaded);
    } else {
        controllerModule.createProject('Default Project');
    }
    console.log('Controller projects after set:', controllerModule.getProjects());
    renderModule.renderPage();
});