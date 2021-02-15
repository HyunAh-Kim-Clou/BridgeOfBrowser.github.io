const todoform = document.querySelector(".brg-todoform"),
    todoinput = todoform.querySelector("input"),
    todolist = document.querySelector(".brg-todolist");

const IDPROV_LS = "idProvider"
const TODOS_LS = "todos";
const ITEMS_CN = "brg-todoitem";
const image_src = `icon/TodoCancel.png`;
let todos = [];
let id_appointer = 1;

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
    localStorage.setItem(IDPROV_LS, JSON.stringify(id_appointer));
}

function deleteTodo(event) {
    const btn = event.target.parentNode;
    const li = btn.parentNode;
    todolist.removeChild(li);

    const reTodos = todos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    todos = reTodos;
    saveTodos();
}
function addTodo(text, todoid) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    li.id = todoid;
    span.innerText = text;
    // delBtn.innerText = "❌";
    delBtn.innerHTML = `<img width="20" height="20" src="${image_src}"/>`;
    delBtn.addEventListener("click", deleteTodo);

    // http://rwdb.kr/columnlayout/
    li.style = "padding: 2px;";
    span.style = "float: left; width: calc(100% - 20%);";
    delBtn.style = "float: right; width: calc(100% - 90%); "
        +"border: none; background-color: #FFFFFF00;";

    li.appendChild(span);
    li.appendChild(delBtn);
    todolist.appendChild(li);

    const todoObj = {
        todo: text,
        id: todoid
    };
    todos.push(todoObj);
    saveTodos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoinput.value;

    addTodo(currentValue, id_appointer);
    todoinput.value = "";
    id_appointer += 1;
}

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    const loadedIdprov = localStorage.getItem(IDPROV_LS);

    if (loadedIdprov !== null) {
        id_appointer = JSON.parse(loadedIdprov) + 1;
    }
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(element => {
            addTodo(element.todo, element.id);
        });
    }
}

function init() {
    loadTodos();
    todoform.addEventListener("submit", handleSubmit);
}
init();