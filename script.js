let targetNum;

targetNum = Math.floor((Math.random() * 100 + 1));
let resultDisplay = document.getElementById('result');


function checkNum() {
    let guess = parseInt(document.getElementById('number').value);
    if (guess === targetNum) {
        resultDisplay.innerHTML = "You Got it!";
        resultDisplay.style.color="green";
    }
    else if (guess > targetNum) {
        resultDisplay.innerHTML = "Too High!";
        resultDisplay.style.color="red";
    }

    else if (guess < targetNum) {
        resultDisplay.innerHTML = "Too Low!"
        resultDisplay.style.color="blue";
    
    }
}

