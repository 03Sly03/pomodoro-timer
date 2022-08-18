let onScreen = document.querySelector(".display__screen");
let minute = document.querySelector(".minute")!;
let second = document.querySelector(".second")!;
let btnStart = document.querySelector(".btn_start")!;
let interval: number;

let buttonStart = document.querySelector(".btn_start");
buttonStart!.addEventListener("click", () => {
    clearInterval(interval);
    if (btnStart.innerHTML === "START") {
        btnStart.innerHTML = "PAUSE";
        interval = setInterval(countDown, 1000);
    } else {
        clearInterval(interval);
        btnStart.innerHTML = "START"
    };
});

function countDown() {
    let sec = +second.innerHTML;
    sec--;
    second.innerHTML = sec.toString();
    if (sec.toString().length < 2 && sec < 10 && sec > -1) {
        second.innerHTML = "0" + sec;
    }

    if (sec < 0) {
        let min = +minute.innerHTML;
        min--;
        minute.innerHTML = min.toString();
        if (min.toString().length < 2 && min < 10 && min > -1) {
            minute.innerHTML = "0" + min;
        }
        second.innerHTML = "59";
    }
    if (minute.innerHTML === "00" && second.innerHTML === "00") {
        alert("Driiiing");
        second.innerHTML = "0" + 0;
        minute.innerHTML = "25";
        btnStart.innerHTML = "START";
        clearInterval(interval);
    }
}

let buttonReset = document.querySelector(".btn_reset");
buttonReset!.addEventListener("click", reset);

function reset() {
    clearInterval(interval);
    minute.innerHTML = "25";
    second.innerHTML = "00";
    btnStart.innerHTML = "START";
}
