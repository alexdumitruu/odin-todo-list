import { ToDo, Project } from "./classes";
import { controllerModule } from "./appLogic";
import "./styles.css";
import { renderModule } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    renderModule.renderPage();
});