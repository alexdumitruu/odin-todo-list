import { ToDo, Project } from "./classes";

const storageModule = (function() {
    const saveState = (projectsArr) => {
        projectsArr.forEach(project => {
            const objJSON = JSON.stringify(project);
            const key = `project_${project.getId()}`;
            localStorage.setItem(key, objJSON);
        });
    }

    const loadState = () => {
        const projects = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('project_')) {
                const data = JSON.parse(localStorage.getItem(key));
                const restoredTodos = data.todos.map(t => new ToDo(
                t.id, t.title, t.description, t.dueDate,
                t.priority, t.checklist, t.completed
            ));
                const restoredProject = new Project(data.id, data.name, restoredTodos);
                projects.push(restoredProject);
            }
        }
        return projects;
    };

    return {
        loadState,
        saveState
    };
})();

export { storageModule };