function saveTodo(todo) {
        const toDoList = getTodoList();

        toDoList.push(todo);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter(todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

// LIST OF ALL ITEMS
function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let toDoList = [];

    if(todoListString) {
        toDoList = JSON.parse(todoListString);
    }

    return toDoList;
}

// update todo item completed status
function updateCompleted(id, status) {
    let toDoList = getTodoList();
    toDoList.map(todo => {
        if(todo.id.toString() === id) {
            todo.completed = status;
            deleteTodo(id);
            saveTodo(todo);
        }
    })
}


export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    updateCompleted
}