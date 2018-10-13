/* Want X's to have 1st turn of every game: */
function startGame() {
    // Create a variable on the document object, assign value of 'X'
    document.turn = 'X';

    // Display, "X's get to start!", message in #turnMessage via setTurnMessage()
    setTurnMessage(document.turn + '\'s gets to start!');

    // Set document.turn 'color:' to '#6c757d;' (#6c757d = 'secondary' (light grey) in Bootstrap 4.0)
    document.getElementById('turnMessage').style.color = '#6c757d';
}

/* Want function to change the text in #message: */
function setTurnMessage(message) {
    // Find #message, set innerText to message 
    document.getElementById('turnMessage').innerText = message;
}

/* Want function to switch document.turn from "X's" to "O's": */
function switchTurn() {
    // If checkWinner returns true
    if (checkWinner(document.turn)) {
        // Displays, "Congrats ___'s, you are the winner!", message in #turnMessage via setTurnMessage()
        setTurnMessage('Congrats ' + document.turn + '\'s, you are the winner!');

        // Set document.turn 'color:' to '#28a745;' (#28a745 = 'success' (green) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#28a745';

        // Else if document.turn is 'X'    
    } else if (document.turn == 'X') {
        // Set document.turn to 'O'
        document.turn = 'O';

        // Display, "It's ___'s turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It\'s ' + document.turn + '\'s turn.');

        // Set document.turn 'color:' to '#0586ff;' (#0586ff = 'primary' (blue) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#0586ff';
        // Else...
    } else {
        // Set document.turn to 'X'
        document.turn = 'X';

        // Display, "It's ___'s turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It\'s ' + document.turn + '\'s turn.');

        // Set document.turn 'color:' to '#de3241;' (#de3241 = 'danger' (red) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#de3241'; // Red
    }
}

/* Want browser to handle click events, and each .square to handle click events: */
function nextMove(square) {
    // If the .square is empty
    if (square.innerText == '') {
        // Add value of document.turn to square.innerText
        square.innerText = document.turn;

        // Call switchTurn() 
        switchTurn();
        // Else the .square isn't empty
    } else {
        // Display, "Oops, pick a different square", message in #turnMessage via setTurnMessage()
        setTurnMessage('Oops, pick a different square.');
    }
}

/* Instead of creating ONE long function, create MANY short functions! */

/* 
* Want to check for winning condition:
* Calls checkRow(), passes in #square__ of each possible winning condition and returns result (true/false)
*/
function checkWinner(move) {
    // Initialize result to false
    let result = false;

    // If...
    if (
        // ...top left to top right/#square1, #square2 and #square3 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 2, 3, move) ||
        // ...middle left to middle right/#square4, #square5 and #square6 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(4, 5, 6, move) ||
        // ...bottom left to bottom right/#square7, #square8 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(7, 8, 9, move) ||
        // ...top left to bottom left/#square1, #square4 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 4, 7, move) ||
        // ...top middle to bottom middle/#square2, #square5 and #square8 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(2, 5, 8, move) ||
        // ...top right to bottom right/#square3, #square6 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(3, 6, 9, move) ||
        // ...top left to bottom right diagonal/#square1, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 5, 7, move) ||
        // ...top right to bottom left diagonal/#square3, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(3, 5, 7, move)) {
        // Set result = true
        result = true;
    }

    return result;
}

/*
* Want function to check rows:
* Calls getBox(), compares value of each .square ('X' or 'O') of each row that is passed in via checkRow() and returns result (true/false)
*/
function checkRow(a, b, c, move) {
    // Initialize result to false
    let result = false;

    // If getBox(a) and getBox(b) and getBox(c) are all equal to all "X's"/all "O's"
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        // Set result = true
        result = true;
    }

    return result;
}

/* Want function to return value of each #square___ (either "X"/"O"): */
function getBox(number) {
    return document.getElementById('square' + number).innerText;
}