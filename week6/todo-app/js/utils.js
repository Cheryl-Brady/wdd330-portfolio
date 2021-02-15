
// Filter functions

function filterCompleted(toDoList) {
    const todoItems = document.getElementsByClassName('todo-content');
    let count = 0;
    for(let todo of todoItems){
        let todoItem = toDoList.filter(item => item.id.toString() === todo.id);
        if(!todoItem[0].completed) {
            todo.parentElement.classList.add('hide');
        } else {
            todo.parentElement.classList.remove('hide');
            count++;
        }
    }
    document.querySelector('#tasks-left').innerHTML = count;
}

function filterActive(toDoList) {
    const todoItems = document.getElementsByClassName('todo-content');
    let count = 0;
    for(let todo of todoItems){
        let todoItem = toDoList.filter(item => item.id.toString() === todo.id);
        if(todoItem[0].completed) {
            todo.parentElement.classList.add('hide');
        } else {
            todo.parentElement.classList.remove('hide');
            count++;
        }
    }
    document.querySelector('#tasks-left').innerHTML = count;
}

function filterAll() {
    const todoItems = document.getElementsByClassName('todo-content');
    let count = 0;
    for(let todo of todoItems){
        todo.parentElement.classList.remove('hide');
        count++;
    }
    document.querySelector('#tasks-left').innerHTML = count;
}


export default {
    filterCompleted,
    filterActive,
    filterAll
}