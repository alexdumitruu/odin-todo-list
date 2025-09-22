import { storageModule } from "./storage";

const app = document.querySelector('.app');

const renderModule = (function() {
    const renderPage = () => {
        let sidebar = document.createElement('div');
        sidebar.classList.add('sidebar')
        let projects = storageModule.loadState();
        projects.forEach(p => {
            let projDiv = document.createElement('div');
            projDiv.classList.add('project')
            projDiv.textContent = p.getName();
            sidebar.appendChild(projDiv);
        });
    }
})();