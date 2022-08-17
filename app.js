let onScreen = document.querySelector(".display__screen");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let btnStart = document.querySelector(".btn_start");

function myStopFunction() {
    clearInterval(interval);
}

let interval;

let buttonStart = document.querySelector(".btn_start");
buttonStart.addEventListener("click", () => {
    clearInterval(interval);
    if (btnStart.innerText === "START") {
        btnStart.innerText = "PAUSE";
        interval = setInterval(countDown, 1000);
    } else {
        console.log("sur pause");
        clearInterval(interval);
        btnStart.innerText = "START"
    };
});

function countDown() {
    second.innerText--;
    console.log(second.innerText);
    if (second.innerText.length < 2 && second.innerText < 10 && second.innerText > -1) {
        second.innerText = "0" + second.innerText;
    }
    
    if (second.innerText < 0) {
        minute.innerText -= 1;
        if (minute.innerText.length < 2 && minute.innerText < 10 && minute.innerText > -1) {
            minute.innerText = "0" + minute.innerText;
        }
        second.innerText = 59;
    }
    if (minute.innerHTML == 0 && second.innerText == 0) {
        console.log("Driiiing");
        alert("Driiiing");
        second.innerText = "0" + 0;
        minute.innerText = 25;
        btnStart.innerText = "START";
        clearInterval(interval);
    }
}

let buttonReset = document.querySelector(".btn_reset");
buttonReset.addEventListener("click", reset);

function reset() {
    clearInterval(interval);
    minute.innerText = 25;
    second.innerText = "00";
    btnStart.innerText = "START";
}
