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
        list.classList.add('list');

        projects.forEach(p => {
            let projDiv = document.createElement('div');
            projDiv.classList.add('project')
            projDiv.textContent = p.getName();
            sidebar.appendChild(projDiv);

            projDiv.addEventListener("click", () => {
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

                //to add button functionalities

                let todoContainer = document.createElement('div');
                todoContainer.classList.add('todo-container');
                p.getTodos().forEach(t => {
                    let todoDiv = document.createElement('div');
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

                    todoDiv.appendChild(titleElement);
                    todoDiv.appendChild(dueDateElement);
                    todoDiv.appendChild(moreInfoBtn);

                    moreInfoBtn.addEventListener('click', () => {
                        todoDiv.classList.remove('todo');
                        todoDiv.classList.add('todo-expanded');
                        // to add more info of todo
                        todoDiv.append()
                    })
                })
            })
        });
        return { renderPage };
    }
})();

export {renderModule};