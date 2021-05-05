
function countDown(event) {
    let currentBtn = event.target;
    let onScreen = document.querySelector(".display__screen");
    console.log(onScreen.innerText);
    let minute = document.querySelector(".minute");
    console.log(minute.innerText);
    let second = document.querySelector(".second");
    console.log(second.innerText);
    let btnStart = document.querySelector(".btn_start");

    if (btnStart.innerText != "START") {
        minute.innerText = 25;
        second.innerText = "0" + 0; 
    } else {
        btnStart.innerText = "RESET";
        let interval = setInterval(function(){

            second.innerText --;
            console.log(second.innerText);
            if (second.innerText.length < 2 && second.innerText < 10 && second.innerText > -1) {
                second.innerText = "0" + second.innerText;
            }
            
            if(second.innerText < 0) {
                minute.innerText -= 1;
                if (minute.innerText.length < 2 && minute.innerText < 10 && minute.innerText > -1) {
                    minute.innerText = "0" + minute.innerText;
                }
                second.innerText = 59;
            }
            if (minute.innerHTML == 0 && second.innerText == 0) {
                console.log("Driiiing");
                alert("Driiiing");
                clearInterval(interval);
                second.innerText = "0" + 0;
                minute.innerText = 25;
                btnStart.innerText = "START";
            }
        },
        1000);
    }  
}

let buttonStart = document.querySelector(".btn_start");
buttonStart.addEventListener("click", countDown);


