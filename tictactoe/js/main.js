import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */

const players = [ ];
let currentPlayer = 0; // This is the index of the array of the currentplayer
const fields = document.querySelectorAll(`.field`);
const resetButton = document.querySelector(`.reset-btn`);
let fieldCount = 0;
const pointsDisplayOne = document.querySelector(`.pointsdisplayOne`);
const pointsDisplayTwo = document.querySelector(`.pointsdisplayTwo`);
const levelDisplayOne = document.querySelector(`.leveldisplayOne`);
const levelDisplayTwo = document.querySelector(`.leveldisplayTwo`);
let hasWon = false;
let addingPoints = 0;
let keepPlaying = true;
//Create two players aligned with the Player class
//const playerOne = ...
//const playerTwo = ...
//Add both players to the players array
const playerOne = new Player (`Red`, `X`);
const playerTwo = new Player (`Blue`, `O`);
const playerNameOne = document.querySelector(`.playerOne`);
const playerNameTwo = document.querySelector(`.playerTwo`);
/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
//for ...
for (let i = 0; i<fields.length; i++){
    fields[i].addEventListener(`click`, function(){
        if (hasWon == false){
            addSymbolToField(i);
            showCurrentlyPlaying();
            if(keepPlaying == true){
                addSymbolToSystem(i);
                showPoints();
            }
        } else {
            alert(`There already is a winner! Please reset`);
        }
    })
}

/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener(`click`, resetGame);


function addSymbolToField(field) {
    const fieldContent = fields[field].textContent;
    if (fieldContent == `X`|| fieldContent == `O`) {
        alert(`This field can not be used`);
        keepPlaying = false;
    }else if (currentPlayer == 0){
        fields[field].textContent = `X`;
        currentPlayer = 1;
        keepPlaying = true;
    }else {
        fields[field].textContent = `O`;
        currentPlayer = 0;
        keepPlaying = true;
    }

    /**
     * Assignment
     * Add the current player symbol to the field textContent
     * What more needs to be done here? Make a short todolist
     */
    
}
let winOne = [1, 2, 3];
let winTwo = [4, 5, 6];
let winThree = [7, 8, 9];
let winFour = [1, 4, 7];
let winFive = [2, 5, 8];
let winSix = [3, 6, 9];
let winSeven = [1, 5, 9];
let winEight = [3, 5, 7];

function addSymbolToSystem(field){
    if (currentPlayer == 1){
        if (field == 0){
            winOne[0] = `X`;
            winFour[0] = `X`;
            winSeven[0] = `X`;
            fieldCount++;
        } else if (field == 1){
            winOne[1] = `X`;
            winFive[0] = `X`;
            fieldCount++;
        } else if (field == 2){
            winOne[2] = `X`;
            winSix[0] = `X`;
            winEight[0] = `X`;
            fieldCount++;
        } else if (field == 3){
            winTwo[0] = `X`;
            winFour[1] = `X`;
            fieldCount++;
        } else if (field ==4){
            winTwo[1] = `X`;
            winFive[1] = `X`;
            winSeven[1] = `X`;
            winEight[1] = `X`;
            fieldCount++;
        } else if (field == 5){
            winTwo[2] = `X`;
            winSix[1] = `X`;
            fieldCount++;
        } else if (field == 6){
            winThree[0] = `X`;
            winFour[2] = `X`;
            winEight[2] = `X`;
            fieldCount++;
        } else if (field == 7){
            winThree[1] = `X`;
            winFive[2] = `X`;
            fieldCount++;
        } else {
            winThree[2] = `X`;
            winSix[2] = `X`;
            winSeven[2] = `X`;
            fieldCount++;
        }
    } else {
        if (field == 0){
            winOne[0] = `O`;
            winFour[0] = `O`;
            winSeven[0] = `O`;
            fieldCount++;
        } else if (field == 1){
            winOne[1] = `O`;
            winFive[0] = `O`;
            fieldCount++;
        } else if (field == 2){
            winOne[2] = `O`;
            winSix[0] = `O`;
            winEight[0] = `O`;
            fieldCount++;
        } else if (field == 3){
            winTwo[0] = `O`;
            winFour[1] = `O`;
            fieldCount++;
        } else if (field ==4){
            winTwo[1] = `O`;
            winFive[1] = `O`;
            winSeven[1] = `O`;
            winEight[1] = `O`;
            fieldCount++;
        } else if (field == 5){
            winTwo[2] = `O`;
            winSix[1] = `O`;
            fieldCount++;
        } else if (field == 6){
            winThree[0] = `O`;
            winFour[2] = `O`;
            winEight[2] = `O`;
            fieldCount++;
        } else if (field == 7){
            winThree[1] = `O`;
            winFive[2] = `O`;
            fieldCount++;
        } else {
            winThree[2] = `O`;
            winSix[2] = `O`;
            winSeven[2] = `O`;
            fieldCount++;
        }
    }
    checkWinner();
}

function checkWinner(){
        if (winOne[0] == `X` && winOne[1] == `X` && winOne[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winOne[0] == `O` && winOne[1] == `O` && winOne[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winTwo[0] == `X` && winTwo[1] == `X` && winTwo[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winTwo[0] == `O` && winTwo[1] == `O` && winTwo[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winThree[0] == `X` && winThree[1] == `X` && winThree[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winThree[0] == `O` && winThree[1] == `O` && winThree[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winFour[0] == `X` && winFour[1] == `X` && winFour[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winFour[0] == `O` && winFour[1] == `O` && winFour[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winFive[0] == `X` && winFive[1] == `X` && winFive[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winFive[0] == `O` && winFive[1] == `O` && winFive[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winSix[0] == `X` && winSix[1] == `X` && winSix[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winSix[0] == `O` && winSix[1] == `O` && winSix[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winSeven[0] == `X` && winSeven[1] == `X` && winSeven[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winOne[0] == `O` && winSeven[1] == `O` && winSeven[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (winEight[0] == `X` && winEight[1] == `X` && winEight[2] == `X`) {
            setTimeout(function(){ alert(`Player X won!`); }, 50);
            pointAmount();
            playerOne.addPoints(addingPoints);
            hasWon = true;
        }
        if (winEight[0] == `O` && winEight[1] == `O` && winEight[2] == `O`) {
            setTimeout(function(){ alert(`Player O won!`); }, 50);
            pointAmount();
            playerTwo.addPoints(addingPoints);
            hasWon = true;
        }
        if (fieldCount == 9 && hasWon == false){
            alert(`It's a tie!`);
        }
    }


function resetGame() {
    for (let i = 0; i<fields.length; i++){
        fields[i].innerHTML = ``;
    }
     winOne = [1, 2, 3];
     winTwo = [4, 5, 6];
     winThree = [7, 8, 9];
     winFour = [1, 4, 7];
     winFive = [2, 5, 8];
     winSix = [3, 6, 9];
     winSeven = [1, 5, 9];
     winEight = [3, 5, 7];
     fieldCount = 0;
     hasWon = false;
}

function showPoints(){
    pointsDisplayOne.textContent = ` `;
    pointsDisplayOne.textContent = `Points: ` + playerOne.points;
    pointsDisplayTwo.textContent = ` `;
    pointsDisplayTwo.textContent = `Points: ` + playerTwo.points;
    if (playerOne.points >= 10){
        playerOne.addLevel();
        playerOne.points = (playerOne.points - 10);
        pointsDisplayOne.textContent = ` `;
        pointsDisplayOne.textContent = `Points: ` + playerOne.points;
        levelDisplayOne.textContent = ` `;
        levelDisplayOne.textContent = `Level: ` + playerOne.level;
    }
    if (playerTwo.points >= 10){
        playerTwo.addLevel();
        playerTwo.points = (playerTwo.points - 10);
        pointsDisplayTwo.textContent = ` `;
        pointsDisplayTwo.textContent = `Points: ` + playerTwo.points;
        levelDisplayTwo.textContent = ` `;
        levelDisplayTwo.textContent = `Level: ` + playerTwo.level;
    }
}

function pointAmount(){
    if (fieldCount == 5){
        addingPoints = 3;
    }else if (fieldCount == 9){
        addingPoints = 1;
    }else {
        addingPoints = 2;
    }
}

function showCurrentlyPlaying(){
    if (currentPlayer == 0){
        playerNameOne.classList.add(`currentlyPlaying`);
        playerNameTwo.classList.remove(`currentlyPlaying`);
    } else if (currentPlayer == 1){
        playerNameOne.classList.remove(`currentlyPlaying`);
        playerNameTwo.classList.add(`currentlyPlaying`);
    }
}
console.log(`File loaded`);