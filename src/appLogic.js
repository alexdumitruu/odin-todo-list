import { ToDo, Project } from "./classes";

const controllerModule = (function () {
    let todos = {};
    let projects = {};

    const createToDo = (title, description, dueDate, priority, checklist) => {
        const id = Date.now();
        return new ToDo(id, title, description, dueDate, priority, checklist, false);
    };

    const deleteToDo = (id) => delete todos[id];

    const createProject = (name, todosArr) => {
        const id = Date.now();
        return new Project(id, name, todosArr);
    }

    const deleteProject = (id) => delete projects[id];

    return {
        todos,
        projects,
        createToDo,
        createProject,
        deleteToDo,
        deleteProject
    }
});

export { controllerModule };