document.addEventListener(`DOMContentLoaded`, () => {
    // Define/assign all variables/functions:
    const TOP_LEFT_SQUARE = document.querySelector(`#squareA`);
    const TOP_MIDDLE_SQUARE = document.querySelector(`#squareB`);
    const TOP_RIGHT_SQUARE = document.querySelector(`#squareC`);
    const MIDDLE_LEFT_SQUARE = document.querySelector(`#squareD`);
    const MIDDLE_CENTER_SQUARE = document.querySelector(`#squareE`);
    const MIDDLE_RIGHT_SQUARE = document.querySelector(`#squareF`);
    const BOTTOM_LEFT_SQUARE = document.querySelector(`#squareG`);
    const BOTTOM_MIDDLE_SQUARE = document.querySelector(`#squareH`);
    const BOTTOM_RIGHT_SQUARE = document.querySelector(`#squareI`);
    const SQUARE = document.querySelector(`.square`);
    let playerMove = 0; 

    const IS_ODD = (moveNumber) => { 
        return moveNumber & 1; // True
    }

    const IS_EVEN = (moveNumber) => {
        return !(moveNumber & 1); // True
    }

    SQUARE.addEventListener(`click`, (event) => {
        playerMove += 1; // Adds 1 to playerMove
        console.log(playerMove);

        // if(IS_ODD(playerMove) === true) {
        //     event.target.style.color = `#de3241`; // Red
        //     event.target.textContent = `X`;
        // } else if(IS_EVEN(playerMove) === true) {
        //     event.target.style.color = `#0586ff`; // Blue
        //     event.target.textContent = `O`;
        // }
    })
})