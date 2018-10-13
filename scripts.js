/* Want X's to have 1st turn of every game: */
function startGame() {
    // Loops through #square___, set innerText to ''
    for(let i = 1; i <= 9; i += 1) {
        clearBox(i);

        // Set #refreshBtn 'visibility:' to 'hidden;'
        document.getElementById('refreshBtn').style.visibility = 'hidden'; 
    }

    // Create a global variable on the document object, assign value of 'X'
    document.turn = 'X';
    // Create another global variable on the document object, assign value of 'null' ('null' = nothing)
    document.winner = null;
    //
    document.cat = false;

    // Display, "X's get to start!", message in #turnMessage via setTurnMessage()
    setTurnMessage(document.turn + '\'s start first!');
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
    if (checkWinner(document.turn) && document.cat == false) {
        // Sets value of document.winner to document.turn
        document.winner = document.turn;
        // Displays, "Congratulations ___'s, you win!", message in #turnMessage via setTurnMessage()
        setTurnMessage('Congratulations ' + document.turn + '\'s, you win!');
        // Set document.turn 'color:' to '#28a745;' (#28a745 = 'success' (green) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#28a745';

        // Set #refreshBtn 'visibility:' to 'visible;'
        document.getElementById('refreshBtn').style.visibility = 'visible';
    // Else if nether X's/O's is winner
    } else if (document.cat == true) {
        // Display, "Cat! Play again?", message in #turnMessage via setTurnMessage()
        setTurnMessage('Cat! Play again?');
        // Set document.turn 'color:' to '#16a2b8;' (#16a2b8 = 'info' (yellow) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#16a2b8';

        // Set #refreshBtn 'visibility:' to 'visible;'
        document.getElementById('refreshBtn').style.visibility = 'visible';
    }

    // Else if document.turn is 'X'    
    else if (document.turn == 'X') {
        // Set document.turn to 'O'
        document.turn = 'O';
        // Display, "It is O's turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It is ' + document.turn + '\'s turn');
        // Set document.turn 'color:' to '#0586ff;' (#0586ff = 'primary' (blue) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#0586ff';
    // Else...
    } else {
        // Set document.turn to 'X'
        document.turn = 'X';
        // Display, "It's X's turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It is ' + document.turn + '\'s turn.');
        // Set document.turn 'color:' to '#de3241;' (#de3241 = 'danger' (red) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#de3241'; 
    }
}

/* Want browser to handle click events, and each .square to handle click events: */
function nextMove(square) {
    // If X's/O's is winner
    if (document.winner != null) {
        // Display, "___'s already won!", message in #turnMessage via setTurnMessage()
        setTurnMessage(document.turn + '\'s already won!');
        // Set document.turn 'color:' to '#ffc904;' (#ffc904 = 'warning' (yellow) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#ffc904';       
    // Else if .square is empty
    } else if (square.innerText == '') {
        // Set value of square.innerText to document.turn
        square.innerText = document.turn;

        // Call switchTurn() 
        switchTurn();
    // Else (.square isn't empty)
    } else {
        // Display, "Oops, pick a different square", message in #turnMessage via setTurnMessage()
        setTurnMessage('Oops, pick a different square!');
        // Set document.turn 'color:' to '#ffc904;' (#ffc904 = 'warning' (yellow) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#ffc904';
    }
}

/*
********************************************************************* 
* Instead of creating ONE long function, create MANY short functions! 
*********************************************************************
*/

// Initialize turnCount to 0
let turnCount = 0;

/* 
* Want to check for winning condition:
* Calls checkRow(), passes in #square__ of each possible winning condition and returns result (true/false)
*/
function checkWinner(move) {
    // Add 1 to turnCount each time checkWinner() is called
    turnCount += 1; 

    // Initialize result to false
    let result = false;

    /*
    *               |              |
    *    #square1   |   #square2   |   #square3
    *               |              |
    *   ------------ -------------- -------------
    *               |              |
    *    #square4   |   #square5   |   #square6
    *               |              |
    *   ------------ -------------- -------------
    *               |              |
    *    #square7   |   #square8   |   #square9
    *               |              |
    */

    // If...
    if (
        // ...#square1, #square2 and #square3 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 2, 3, move) ||
        // ...#square4, #square5 and #square6 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(4, 5, 6, move) ||
        // ...#square7, #square8 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(7, 8, 9, move) ||
        // ...#square1, #square4 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 4, 7, move) ||
        // ...#square2, #square5 and #square8 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(2, 5, 8, move) ||
        // ...#square3, #square6 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(3, 6, 9, move) ||
        // ...#square1, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(1, 5, 9, move) ||
        // ...#square3, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        checkRow(3, 5, 7, move)) {
        // Set result = true
        result = true;
    } else if(turnCount > 8 && result === false) {
        document.cat = true;
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

/* Want function to clear value of each #square___ (either "X"/"O"): */
function clearBox(number) {
    document.getElementById('square' + number).innerText = ''; 
}