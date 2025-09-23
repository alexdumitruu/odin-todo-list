import { ToDo, Project } from "./classes";

const controllerModule = (function () {
    let projects = [];

    const createToDo = (title, description, dueDate, priority, checklist) => {
        const id = Date.now();
        return new ToDo(id, title, description, dueDate, priority, checklist);
    };

    const createProject = (name, todosArr) => {
        const id = Date.now();
        const project = new Project(id, name, todosArr);
        projects.push(project);
        return project;
    }

    const deleteProject = (id) => {
        projects = projects.filter(p => p.getId() !== projectId);
    };

    const getProjects = () => projects; 
    const addTodoToProject = (projectId, todo) => {
        const project = projects.find(p => p.getId() === projectId);
        if (project) {
            project.add(todo);
        }
    }
    const deleteTodoFromProject = (projectId, todoId) => {
        const project = projects.find(p => p.getId() === projectId);
        if (project) {
            const todos = project.getTodos().filter(t => t.getId() !== todoId);
            project.setTodos(todos);
        }
    }

    return {
        createToDo,
        deleteTodoFromProject,
        createProject,
        deleteProject,
        addTodoToProject,
        getProjects
    }
})();

export { controllerModule };