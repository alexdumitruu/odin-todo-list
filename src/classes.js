class ToDo {
    constructor(id, title, description, dueDate, priority, checklist, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.completed = completed;
    }
    getTitle = () => this.title;
    setTitle = (title) => { this.title = title; };

    getDescription = () => this.description;
    setDescription = (description) => { this.description = description; };

    getDueDate = () => this.dueDate;
    setDueDate = (dueDate) => { this.dueDate = dueDate; };

    getPriority = () => this.priority;
    setPriority = (priority) => { this.priority = priority; };

    getChecklist = () => this.checklist;
    setChecklist = (checklist) => { this.checklist = checklist; };

    getCompleted = () => this.completed;
    setCompleted = (completed) => { this.completed = completed; };
};

class Project {
    constructor(id, name, todos) {
        this.id = id;
        this.name = name;
        this.todos = todos;
    }
    constructor() {
        this.id = 0;
        this.name = "Default Project";
        this.todos = [];
    }
    getId = () => this.id;
    getName = () => this.name;
    getTodos = () => this.todos;

    setId = (id) => { this.id = id; };
    setName = (name) => { this.name = name; };
    setTodos = (todos) => { this.todos = todos; };
};

export {ToDo, Project};