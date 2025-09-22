class ToDo {
    constructor(id = 0, title = "", description = "", 
        dueDate = Date.now(), priority, checklist, completed = false)
    {
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
    toggleComplete = () => this.completed = !this.completed;

    getId = () => this.id;
    createId = () => this.id = Date.now();
};

class Project {
    constructor(id = 0, name = "Default Project", todos = []) {
        this.id = id;
        this.name = name;
        this.todos = todos;
    }
    getId = () => this.id;
    getName = () => this.name;
    getTodos = () => this.todos;

    createId = () => this.id = Date.now();
    setName = (name) => { this.name = name; };
    setTodos = (todos) => { this.todos = todos; };

    add = (todo) => this.todos.push(todo);
    remove = (todo) => this.todos = this.todos.filter(t => t !== todo);
};

export {ToDo, Project};