const pinbutton = document.querySelector(".brg-pinpoint"),
    pinlist = document.querySelector(".brg-pinlist");

const PINS_LS = "pins";
let pins = [];

function rewindPinlist() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
    if (confirm('모든 핀들을 삭제할까요?')) {
        const pinlen = pinlist.children.length;
        for (var i = 0; i < pinlen; i++) {
            pinlist.removeChild(pinlist.children[0]);
        }

        pins = [];
        savePins();
    }
}

function savePins() {
    localStorage.setItem(PINS_LS, JSON.stringify(pins));
}

function addPinpoint(text) {
    const li = document.createElement("li");
    li.innerText = text;
    li.style = "margin-bottom: 3px;";
    pinlist.appendChild(li);

    pins.push(text);
    savePins();
}

function handleClickPin(event) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const date = Date().toLocaleString().split(" ");
    const pinDate = `${date[3]}-${date[1]}-${date[2]}`;
    const pinTime = date[4];

    addPinpoint(`${pinDate} ${pinTime}`);
}

function loadPinpoints() {
    const loadedPins = localStorage.getItem(PINS_LS);

    if (loadedPins !== null) {
        const parsedPins = JSON.parse(loadedPins);
        parsedPins.forEach(element => {
            addPinpoint(element);
        });
    }
}

function init() {
    loadPinpoints();

    pinbutton.addEventListener("click", handleClickPin);
    pinlist.addEventListener("click", rewindPinlist);
}
init();