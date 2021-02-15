const body = document.querySelector("body");

const IMG_LEN = 14;  // image파일 갯수

function paintImage(imgno) {
    // const image = new Image();
    // image.src = `sunflower/${imgno + 1}.jpg`;
    // image.classList.add("bgImage");
    // body.prepend(image);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/background
    // no-repeat top/100% 
    const image_src = `sunflower/${imgno + 1}.jpg`;
    body.style = `background-image: url(${image_src});`;
}

// random [0, IMG_LEN]
function genRandom() {
    const no = Math.floor(Math.random() * IMG_LEN);
    return no;
}

function init() {
    const randomNo = genRandom();
    paintImage(randomNo);
}
init();