let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCounter = 0
let guestScoreCounter = 0 

function homeAdd1(){
    homeScoreCounter = homeScoreCounter + 1
    homeScore.textContent = homeScoreCounter
}

function homeAdd2(){
    homeScoreCounter = homeScoreCounter + 2
    homeScore.textContent = homeScoreCounter
}

function homeAdd3(){
    homeScoreCounter = homeScoreCounter + 3
    homeScore.textContent = homeScoreCounter
}

function guestAdd1(){
    guestScoreCounter = guestScoreCounter + 1
    guestScore.textContent = guestScoreCounter
}

function guestAdd2(){
    guestScoreCounter = guestScoreCounter + 2
    guestScore.textContent = guestScoreCounter
}

function guestAdd3(){
    guestScoreCounter = guestScoreCounter + 3
    guestScore.textContent = guestScoreCounter
}

let resetButton = document.getElementById("reset-btn")

function reset(){
    homeScoreCounter = 0
    homeScore.textContent = homeScoreCounter

    guestScoreCounter = 0
    guestScore.textContent = guestScoreCounter
}
