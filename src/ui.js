import { ToDo, Project } from "./classes";
import { storageModule } from "./storage";

const renderModule = (function () {
    const renderPage = () => {
        let projects = storageModule.loadState();
        const app = document.querySelector('.app');
        // if (!app) {
        //     console.error('No .app element found!');
        //     return;
        // }
        app.innerHTML = "";
        // sidebar
        let sidebar = document.createElement('div');
        sidebar.classList.add('sidebar')

        const newProjectBtn = document.createElement('button');
        newProjectBtn.textContent = "New Project";
        newProjectBtn.classList.add('new-project-button');
        sidebar.appendChild(newProjectBtn);

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
        list.classList.add('list');

        projects.forEach(p => {
            let projDiv = document.createElement('div');
            projDiv.classList.add('project')
            projDiv.textContent = p.getName();
            sidebar.appendChild(projDiv);

            projDiv.addEventListener("click", () => {
                list.innerHTML = "";
                let newToDoDiv = document.createElement('div');
                newToDoDiv.classList.add('new-todo-container');
                list.appendChild(newToDoDiv);

                const input = document.createElement('input');
                input.classList.add('input-todo');

                const dueDateInput = document.createElement('input');
                dueDateInput.classList.add('input-date-todo');
                dueDateInput.setAttribute('type', 'date');

                const comboBoxPriority = document.createElement('select');
                let option1 = document.createElement('option');
                let option2 = document.createElement('option');
                let option3 = document.createElement('option');
                option1.textContent = 'Low';
                option2.textContent = 'Medium';
                option3.textContent = 'High';
                comboBoxPriority.appendChild(option1);
                comboBoxPriority.appendChild(option2);
                comboBoxPriority.appendChild(option3);

                const descriptionTextBox = document.createElement('textarea');
                descriptionTextBox.classList.add('textarea-todo');

                const addTaskBtn = document.createElement('button');
                const cancelTaskBtn = document.createElement('button');

                addTaskBtn.textContent = "Add Task";
                cancelTaskBtn.textContent = "Cancel";

                newToDoDiv.append(input, dueDateInput, comboBoxPriority,
                    descriptionTextBox, addTaskBtn, cancelTaskBtn);

                addTaskBtn.addEventListener("click", () => {
                    const title = input.value.trim();
                    const dueDate = dueDateInput.value;
                    const priority = comboBoxPriority.value;
                    const description = descriptionTextBox.value.trim();

                    if (!title) return;

                    const newTodo = new ToDo(Date.now(), title, description, dueDate, priority, [], false);
                    p.add(newTodo);
                    storageModule.saveState(projects);
                });

                cancelTaskBtn.addEventListener("click", () => {
                    input.value = "";
                    dueDateInput.value = "";
                    comboBoxPriority.value = option1.textContent;
                    descriptionTextBox.value = ""
                });

                let todoContainer = document.createElement('div');
                todoContainer.classList.add('todo-container');
                p.getTodos().forEach(t => {
                    const todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');

                    let titleElement = document.createElement('h2');
                    let dueDateElement = document.createElement('p');
                    let moreInfoBtn = document.createElement('button');

                    titleElement.classList.add('todo-title');
                    dueDateElement.classList.add('todo-duedate');
                    moreInfoBtn.classList.add('todo-moreinfo');

                    titleElement.textContent = t.getTitle();
                    dueDateElement.textContent = t.getDueDate();
                    moreInfoBtn.textContent = 'Expand';

                    todoDiv.append(titleElement, dueDateElement);
                    todoContainer.appendChild(todoDiv);

                    todoDiv.appendChild(titleElement);
                    todoDiv.appendChild(dueDateElement);
                    todoDiv.appendChild(moreInfoBtn);

                    moreInfoBtn.addEventListener('click', () => {
                        todoDiv.classList.remove('todo');
                        todoDiv.classList.add('todo-expanded');
                        // to add more info of todo
                        todoDiv.append()
                    });
                });
            });
        });
        app.appendChild(sidebar);
        app.appendChild(list);
    }
    return { renderPage };
})();

export { renderModule };