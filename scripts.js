// Want X's to have 1st turn of every game:
function startGame() {
    // Set a variable on the document object, assign value of 'X'
    document.turn = 'X'; 
    // Display, "X's get to start!", message in #turnMessage via setTurnMessage()
    setTurnMessage(document.turn + '\'s gets to start!'); 
    // Set document.turn 'color:' to '#6c757d;' (#6c757d = 'secondary' (light grey) in Bootstrap 4.0)
    document.getElementById('turnMessage').style.color = '#6c757d'; 
}

// Want function to change the text in #message:
function setTurnMessage(message) {
    document.getElementById('turnMessage').innerText = message; // Find #message, change innerText to message 
}

// Want function to switch document.turn from "X's" to "O's":
function switchTurn() {
    if(checkWinner(document.turn)) { // If checkWinner returns true
        // Displays, "Congrats ___'s, you are the winner!", message in #turnMessage via setTurnMessage()
        setTurnMessage('Congrats ' + document.turn + '\'s, you are the winner!'); 
        // Set document.turn 'color:' to '#28a745;' (#28a745 = 'success' (green) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#28a745'; 
    } else if (document.turn == 'X') { // Else if document.turn is 'X'
        // Set document.turn to 'O'
        document.turn = 'O'; 
        // Display, "It's ___'s turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It\'s ' + document.turn + '\'s turn.');
        // Set document.turn 'color:' to '#0586ff;' (#0586ff = 'primary' (blue) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#0586ff';
    } else { // Else... 
        // Set document.turn to 'X'
        document.turn = 'X'; 
        // Display, "It's ___'s turn.", message in #turnMessage via setTurnMessage()
        setTurnMessage('It\'s ' + document.turn + '\'s turn.');
        // Set document.turn 'color:' to '#de3241;' (#de3241 = 'danger' (red) in Bootstrap 4.0)
        document.getElementById('turnMessage').style.color = '#de3241'; // Red
    }
}

// Want browser to handle click events, and each .square to handle click events:
function nextMove(square) {
    if(square.innerText == '') { // If the .square is empty
        square.innerText = document.turn; // Add value of document.turn to square.innerText
        switchTurn(); // Call switchTurn() 
    } else { // Else the .square isn't empty
        // Display, "Oops, pick a different square", message in #turnMessage via setTurnMessage()
        setTurnMessage('Oops, pick a different square.'); 
    }
}

// Instead of creating one long function (one function to rule them all) ...create many short functions!
// Want to check for winning condition:
// Calls checkRow(), passes in #square__ of each possible winning condition and returns result (true/false)
function checkWinner(move) {
    let result = false; // Initialize result to false
    if(checkRow(1, 2, 3, move) || // If top left to top right/#square1, #square2 and #square3 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(4, 5, 6, move) || // If middle left to middle right/#square4, #square5 and #square6 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(7, 8, 9, move) || // If bottom left to bottom right/#square7, #square8 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(1, 4, 7, move) || // If top left to bottom left/#square1, #square4 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(2, 5, 8, move) || // If top middle to bottom middle/#square2, #square5 and #square8 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(3, 6, 9, move) || // If top right to bottom right/#square3, #square6 and #square9 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(1, 5, 7, move) || // If top left to bottom right diagonal/#square1, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
       checkRow(3, 5, 7, move)) { // If top right to bottom left diagonal/#square3, #square5 and #square7 = 'X', 'X', 'X'/'O', 'O', 'O'
        result = true; // Set result = true
    }
    return result; // Return result
}

// Want function to check rows:
// Calls getBox(), compares value of each .square ('X' or 'O') of each row that is passed in via checkRow() and returns result (true/false)
function checkRow(a, b, c, move) {
    let result = false; // Initialize result to false
    // If getBox(a) and getBox(b) and getBox(c) are all equal to all "X's"/all "O's"...
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) { 
        result = true; // Set result = true
    }
    return result; // Return result
}

// Want function to return value of each #square___ (either "X"/"O"):
function getBox(number) {
    return document.getElementById('square' + number).innerText;
}