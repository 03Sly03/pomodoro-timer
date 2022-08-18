let onScreen = document.querySelector(".display__screen");
let minute = document.querySelector(".minute") as HTMLTextAreaElement;
let second = document.querySelector(".second") as HTMLTextAreaElement;
let btnStart = document.querySelector(".btn_start") as HTMLTextAreaElement;
let title = document.querySelector("#title") as HTMLTextAreaElement;
let interval: number;
let numberOfUse: number = 0;

let buttonStart = document.querySelector(".btn_start") as HTMLTextAreaElement;
buttonStart.addEventListener("click", () => {
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
        toggleModal();
        second.innerHTML = "0" + 0;
        minute.innerHTML = "25";
        btnStart.innerHTML = "START";
        clearInterval(interval);
        numberOfUse++;
        title.innerText = `${title.innerText} (${numberOfUse})`;
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

let agreeBtn = document.querySelector("#modal-agree-btn") as HTMLTextAreaElement;
agreeBtn.addEventListener("click", toggleModal);

function toggleModal() {
    const modalContainer = document.querySelector(".modal-container") as HTMLTextAreaElement;
    modalContainer.classList.toggle('active');
}