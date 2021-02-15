import utils from './utils.js';
import ls from './ls.js';


/* ADD NEW TODOS INPUT BOX */
document.querySelector('#addBtn').onclick = newTodo;

function loadTodos() {
    document.querySelector('#todos').innerHTML = "";
    const toDoList = ls.getTodoList();
    let count = 0;
    toDoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
        count++;
    })
    document.querySelector('#tasks-left').innerHTML = count;
}

function newTodo() {
    const todo = createTodo();
    ls.saveTodo(todo);
    loadTodos();
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { 
        id: Date.now(), 
        content: input.value, 
        completed: false
    }
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = "";
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);
    completeBtn.onclick = completeTodo;
    if(todo.completed) {
        completeBtn.innerHTML = "X";
        todoDiv.classList.add('completedItem');
    }

    // todo content
    const todoContent = document.createElement('div');
    todoContent.id = todo.id;
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    todoDiv.appendChild(todoContent);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}


/* FOOTER WITH FILTERS */
function clearFilterBorders() {
    const allFilters = document.getElementsByClassName('filterBtn');
    for (let item of allFilters) {
        item.classList.remove('selectedFilter');
    }
}

//click options for ALL / ACTIVE / COMPLETED
document.querySelector('#completedFilterBtn').onclick = showCompleted;

document.querySelector('#activeFilterBtn').onclick = showActive;

document.querySelector('#allFilterBtn').onclick = showAll;


/* EVENT HANDLERS */
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function completeTodo(e) {
    const btn = e.currentTarget;
    
    if (btn.classList[0] === "complete-btn") {
        const todo = btn.parentElement;
        const todoElement = todo.querySelector(".todo-content");
        if(todo.classList.contains("completedItem")){
            btn.innerHTML = "";
            ls.updateCompleted(todoElement.id, false);
        } else {
            btn.innerHTML = "X";
            ls.updateCompleted(todoElement.id, true);
        }
        todo.classList.toggle("completedItem");
    }
}

function showCompleted (e) {
    utils.filterCompleted(ls.getTodoList());
    clearFilterBorders();
    e.currentTarget.classList.add('selectedFilter');
}

function showActive(e) {
    utils.filterActive(ls.getTodoList());
    clearFilterBorders();
    e.currentTarget.classList.add('selectedFilter');
}

function showAll(e) {
    utils.filterAll();
    clearFilterBorders();
    e.currentTarget.classList.add('selectedFilter');
}

// Load all items upon refresh
loadTodos();