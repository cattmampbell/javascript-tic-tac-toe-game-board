document.addEventListener(`DOMContentLoaded`, () => {
    // Define/assign all variables/functions:
    // Top Row
    const TOP_LEFT_SQUARE = document.querySelector(`#squareA`);
    const TOP_MIDDLE_SQUARE = document.querySelector(`#squareB`);
    const TOP_RIGHT_SQUARE = document.querySelector(`#squareC`);
    // Middle Row
    const MIDDLE_LEFT_SQUARE = document.querySelector(`#squareD`);
    const MIDDLE_CENTER_SQUARE = document.querySelector(`#squareE`);
    const MIDDLE_RIGHT_SQUARE = document.querySelector(`#squareF`);
    // Bottom
    const BOTTOM_LEFT_SQUARE = document.querySelector(`#squareG`);
    const BOTTOM_MIDDLE_SQUARE = document.querySelector(`#squareH`);
    const BOTTOM_RIGHT_SQUARE = document.querySelector(`#squareI`);
    const BOARD = document.getElementById(`board`);
    let playerMove = 0; 

    // Creates/appends <elementName id="idName" class="className">, returns element
    const CREATE_ELEMENT = (elementName, idName, className, appendTo) => {
        const ELEMENT = document.createElement(elementName);
        ELEMENT.id = idName;
        ELEMENT.className = className;
        appendTo.appendChild(ELEMENT);
        return ELEMENT;
    }

    // Creates/appends <appendTo>textContent, returns element
    const CREATE_TEXT_NODE = (textContent, appendTo) => {
        const ELEMENT = document.createTextNode(textContent);
        appendTo.appendChild(ELEMENT);
        return ELEMENT;
    }

    BOARD.addEventListener(`click`, (event) => {
        playerMove += 1; // Adds 1 to playerMove
        const CLICKED_SQUARE = event.target;

        if(CLICKED_SQUARE.)

        if(playerMove % 2 === 0) { // Even
            const CLICKED_O_SQUARE = event.target;
            const O_SQUARE = CREATE_ELEMENT(`p`, `moveNumber${playerMove}`, `squareTxt`, CLICKED_O_SQUARE);
            const O_SQUARE_TEXT = CREATE_TEXT_NODE(`O`, O_SQUARE);
            O_SQUARE.style.color = `#0586ff`; // Blue
        } else { // Odd
            const CLICKED_X_SQUARE = event.target;
            const X_SQUARE = CREATE_ELEMENT(`p`, `moveNumber${playerMove}`, `squareTxt`, CLICKED_X_SQUARE);
            const X_SQUARE_TEXT = CREATE_TEXT_NODE(`X`, X_SQUARE);
            X_SQUARE.style.color = `#de3241`; // Red
        }
    })
})