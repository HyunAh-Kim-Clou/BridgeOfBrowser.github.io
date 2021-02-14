const form = document.querySelector(".brg-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".brg-greeting");

const USER_LS = "currentUser"; // DB key
const REMOVING_CN = "removing";  // css classname


function paintGreeting(username) {
    form.classList.add(REMOVING_CN);
    // greeting.classList.add(REMOVING_CN);
    greeting.innerText = `Welcome ${username}`;
}

function saveUsername(username) {
    localStorage.setItem(USER_LS, username);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveUsername(currentValue);
}
function askUsername() {
    // form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {  // 처음 방문하면
        askUsername();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();