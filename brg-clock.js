const clockContainer = document.querySelector(".brg-clock"),
    clockToday = document.querySelector(".brg-today");

function setDate() {
    const date = new Date();
    const tmonth = date.getMonth() + 1;
    const tdate = date.getDate();
    const weekday_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday_kr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const tday = weekday_kr[date.getDay()];
    clockToday.innerHTML = `${tmonth}월 ${tdate}일 ${tday}`;
}

function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const span = document.createElement("span");
    const hourspan = document.createElement("span");
    hourspan.innerText = `${hours < 10? `0${hours}`: hours}`;
    const minspan = document.createElement("span");
    minspan.innerText = `:${minutes < 10? `0${minutes}`: minutes}`;
    const secspan = document.createElement("span");
    secspan.innerText = ` ${seconds < 10? `0${seconds}`: seconds}`;
    secspan.style.fontSize = "30px";
    secspan.style.color = "#FFFFFFBB"
    
    span.appendChild(hourspan);
    span.appendChild(minspan);
    span.appendChild(secspan);
    clockContainer.innerHTML = span.innerHTML;
}

function init() {
    setDate();
    setTime();
    setInterval(setTime, 1000);
}
init();