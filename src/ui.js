import { controllerModule } from "./appLogic";
import { ToDo, Project } from "./classes";
import { storageModule } from "./storage";

const renderModule = (function () {
    const renderPage = () => {
        const app = document.querySelector('.app');
        app.innerHTML = "";

        const projects = controllerModule.getProjects();

        // sidebar
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar')

        const details = document.createElement('h2');
        details.classList.add('details');
        details.textContent = 'Double click to delete a project.';

        const newProjectBtn = document.createElement('button');
        newProjectBtn.textContent = "New Project";
        newProjectBtn.classList.add('new-project-button');
        sidebar.appendChild(newProjectBtn);
        sidebar.appendChild(details);

        newProjectBtn.addEventListener("click", () => {
            const newProjDiv = document.createElement('div');
            sidebar.appendChild(newProjDiv);

            const input = document.createElement('input');
            input.classList.add('input');

            const addBtn = document.createElement('button');
            addBtn.textContent = 'Add';
            addBtn.classList.add('add-btn');

            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel-btn');

            newProjDiv.appendChild(input);
            newProjDiv.appendChild(addBtn);
            newProjDiv.appendChild(cancelBtn);

            addBtn.addEventListener("click", () => {
                const name = input.value.trim();
                if (!name) return;

                const newProject = controllerModule.createProject(name);
                storageModule.saveState(controllerModule.getProjects());
                renderPage();
            });

            cancelBtn.addEventListener("click", () => {
                sidebar.removeChild(newProjDiv);
            })
        });
        // todos
        const list = document.createElement('div');
        list.classList.add('list');

        projects.forEach(p => {
            let projDiv = document.createElement('div');
            projDiv.classList.add('project')
            projDiv.textContent = p.getName();
            sidebar.appendChild(projDiv);

            projDiv.addEventListener("click", () => {
                list.innerHTML = "";

                const newTodoDiv = document.createElement('div');
                const inputTitle = document.createElement('input');
                const dueDateInput = document.createElement('input');
                dueDateInput.type = 'date';
                const prioritySelect = document.createElement('select');
                newTodoDiv.classList.add('new-todo-form'); // add this line
                inputTitle.classList.add('todo-input-title');
                dueDateInput.classList.add('todo-input-date');
                prioritySelect.classList.add('todo-input-priority');
                ['Low', 'Medium', 'High'].forEach(priorityLabel => {
                    const opt = document.createElement('option');
                    opt.value = priorityLabel;
                    opt.textContent = priorityLabel;
                    prioritySelect.appendChild(opt);
                });
                const descBox = document.createElement('textarea');
                const addBtn = document.createElement('button');
                const cancelBtn = document.createElement('button');
                descBox.classList.add('todo-input-desc');
                addBtn.classList.add('todo-add-btn');
                cancelBtn.classList.add('todo-cancel-btn');
                addBtn.textContent = 'Add Task';
                cancelBtn.textContent = 'Cancel';
                newTodoDiv.append(inputTitle, dueDateInput, prioritySelect, descBox, addBtn, cancelBtn);
                list.appendChild(newTodoDiv);

                addBtn.addEventListener("click", () => {
                    const todo = controllerModule.createToDo(
                        inputTitle.value.trim(),
                        descBox.value.trim(),
                        dueDateInput.value,
                        prioritySelect.value,
                        []
                    );
                    controllerModule.addTodoToProject(p.getId(), todo);
                    storageModule.saveState(controllerModule.getProjects());
                    renderPage();
                });

                cancelBtn.addEventListener("click", () => {
                    inputTitle.value = "";
                    dueDateInput.value = "";
                    prioritySelect.selectedIndex = 0;
                    descBox.value = ""
                });

                const todoContainer = document.createElement('div');
                todoContainer.classList.add('todo-container');
                p.getTodos().forEach(t => {
                    const todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');

                    const titleElement = document.createElement('h2');
                    const dueDateElement = document.createElement('p');
                    const moreInfoBtn = document.createElement('button');

                    const detailsDiv = document.createElement('div');
                    titleElement.classList.add('todo-title');
                    dueDateElement.classList.add('todo-due');
                    moreInfoBtn.classList.add('todo-expand-btn');
                    detailsDiv.classList.add('todo-details');
                    detailsDiv.style.display = 'none';

                    const descElement = document.createElement('p');
                    descElement.textContent = t.getDescription();
                    const priorityElement = document.createElement('p');
                    priorityElement.textContent = `Priority: ${t.getPriority()}`;
                    detailsDiv.append(descElement, priorityElement);

                    titleElement.classList.add('todo-title');
                    dueDateElement.classList.add('todo-duedate');
                    moreInfoBtn.classList.add('todo-moreinfo');

                    titleElement.textContent = t.getTitle();
                    dueDateElement.textContent = t.getDueDate();
                    moreInfoBtn.textContent = 'Expand';

                    moreInfoBtn.addEventListener('click', () => {
                        if (detailsDiv.style.display === 'none') {
                            detailsDiv.style.display = 'block'; // show details
                            todoDiv.classList.add('todo-expanded');
                            moreInfoBtn.textContent = 'Collapse';
                        } else {
                            detailsDiv.style.display = 'none'; // hide details
                            todoDiv.classList.remove('todo-expanded');
                            moreInfoBtn.textContent = 'Expand';
                        }
                    });
                    todoDiv.append(titleElement, dueDateElement, moreInfoBtn, detailsDiv);
                    todoContainer.appendChild(todoDiv);
                    list.appendChild(todoContainer);
                });
            });

            projDiv.addEventListener('dblclick', () => {
                controllerModule.deleteProject(p.getId());
                localStorage.removeItem(`project_${p.getId()}`);
                sidebar.removeChild(projDiv);
            });

        });
        app.appendChild(sidebar);
        app.appendChild(list);
    }
    return { renderPage };
})();

export { renderModule };