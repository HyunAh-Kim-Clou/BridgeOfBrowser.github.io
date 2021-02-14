const weather = document.querySelector(".brg-weather");

const API_KEY = "11c75c7c46564f70967154042211002";
const COORDS = "coords";  // (lat, lon) DB key

function setWeather(lat, lon) {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const place = json.location.name;
        const country = json.location.country;
        const temperature = json.current.temp_c;
        const condition = json.current.condition.text;
        weather.innerText = `${temperature} ${condition} \n@ ${place}, ${country}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    setWeather(latitude, longitude);
}
function handleGeoError() {
    console.log("Can't access Geo location");
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        setWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();