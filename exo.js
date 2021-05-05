// function stop(event) {
//     let currentBtn = event.target;
//     let btnStart = document.querySelector(".btn_start");
//     if (btnStart.innerText != "START" && btnStart.innerText != "RESET") {
//         clearInterval(interval);
//         btnStart.innerText = "RESET";
// }  
// }

if (btnStart.innerText != "START" && btnStart.innerText != "STOP") {
    minute.innerText = 25;
    second.innerText = "0" + 0;
    btnStart.innerText = "STOP";
} else {
    btnStart.innerText = "STOP";
}