import { Project } from "./classes";
import { storageModule } from "./storage";

const app = document.querySelector('.app');

const renderModule = (function() {
    const renderPage = () => {
        let projects = storageModule.loadState();
        // sidebar
        let sidebar = document.createElement('div');
        sidebar.classList.add('sidebar')

        const newProjectBtn = document.createElement('button');
        sidebar.appendChild(newProjectBtn);
        newProjectBtn.classList.add('new-project-button');

        newProjectBtn.addEventListener("click", () => {
            const newProjDiv = document.createElement('div');
            sidebar.appendChild(newProjDiv);

            const input = document.createElement('input');
            input.classList.add('input');

            const addBtn = document.createElement('button');
            addBtn.classList.add('add-btn');

            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');

            newProjDiv.appendChild(input);
            newProjDiv.appendChild(addBtn);
            newProjDiv.appendChild(cancelBtn);

            addBtn.addEventListener("click", () => {
                const projName = input.value.trim();
                var id = Date.now();
                var todos = [];
                var newProj = new Project(id, projName, todos);
                projects.push(newProj);
                storageModule.saveState(projects);

                const projDiv = document.createElement("div");
                projDiv.classList.add("project");
                projDiv.textContent = projName;
                sidebar.appendChild(projDiv);

                sidebar.removeChild(newProjDiv);
            });

            cancelBtn.addEventListener("click", () => {
                sidebar.removeChild(newProjDiv);
            })
        });
        // todos
        let list = document.createElement('div');
        list.classList.add('list')

        projects.forEach(p => {
            let projDiv = document.createElement('div');
            projDiv.classList.add('project')
            projDiv.textContent = p.getName();
            sidebar.appendChild(projDiv);

            projDiv.addEventListener("click", () => {
                let todoContainer = document.createElement('div');
                todoContainer.classList.add('todo-container');
                p.getTodos().forEach(t => {
                    let todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');
                    
                })
            })
        });


    }
})();