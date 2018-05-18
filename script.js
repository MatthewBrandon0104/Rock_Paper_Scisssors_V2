function gameInit() {
let compChoice;
let userChoice;
let win = 0;
let loss = 0;
let tie = 0;

const btn = document.getElementsByClassName('button');

for (i = 0; i < btn.length; i++) {
    let x = i;
    btn[i].addEventListener('click', function() {
        if (x === 0) {
            userChoice = "Rock";
        } else if (x === 1) {
            userChoice = "Paper";
        } else {
            userChoice = "Scissors";
        }
        playRound();
        test();
        if (win === 5) {
            gameOver();
        }
        if (loss === 5) {
            gameOver();
        }
    });
}

function getCompChoice() {
    let x = Math.floor((Math.random() * 3) + 1);
    if (x === 1) {
        compChoice = "Rock";
    } else if (x === 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
}

function playRound() {
    getCompChoice();
    if (userChoice === "Rock" && compChoice === "Rock") {
        tie += 1;
    } else if (userChoice === "Rock" && compChoice === "Scissors") {
        win += 1;
    } else if (userChoice === "Paper" && compChoice === "Paper") {
        tie += 1;
    } else if (userChoice === "Paper" && compChoice === "Rock") {
        win += 1;
    } else if (userChoice === "Scissors" && compChoice === "Scissors") {
        tie += 1;
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
        tie += 1;
    } else {
        loss += 1;
    }
}

function gameOver() {
    let temp = document.getElementById('game-over');
    
    if (win === 5) {
        temp.textContent = "YOU WIN!";
    } else {
        temp.textContent = "YOU LOSE!";
    }
}

document.getElementById('reset').addEventListener('click', function() {
        win = 0;
        loss = 0;
        tie = 0;
        test();
    });

function test() {
    document.getElementById('win').textContent = win;
    document.getElementById('loss').textContent = loss;
    document.getElementById('tie').textContent = tie;
    
    document.getElementById('test').textContent = "User Choice " + userChoice + " Comp Choice " + compChoice;
}
}

gameInit();

