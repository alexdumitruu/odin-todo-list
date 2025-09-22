const storageModule = (function() {
    const saveState = (projectsArr) => {
        projectsArr.forEach(project => {
            const objJSON = JSON.stringify(project);
            const key = `project_${project.getId()}`; // safer key
            localStorage.setItem(key, objJSON);
        });
    }

    const loadState = () => {
        const projects = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('project_')) {
                const data = JSON.parse(localStorage.getItem(key));
                projects.push(data);
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