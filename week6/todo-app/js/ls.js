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

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let toDoList = [];

    if(todoListString) {
        toDoList = JSON.parse(todoListString);
    }

    return toDoList;
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList
}