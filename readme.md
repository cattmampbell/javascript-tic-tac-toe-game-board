# Objectives

* In this lab, you will finish your Tic Tac Toe game! Let's add interactivity and make it work.
    * Note: You should have already have the game board for Tic Tac Toe from the previous lab.

## Requirements

In order for the game to work, you need to write JavaScript that will interact with your `HTML` elements. The requirements for the game are:
* Players can click on a cell in order to make a move. 
* X is **always** the first player.
* After each move, the board is checked for a winner or a draw. 
* If there is a winner or draw, show a message that announces the winner or declares a draw.
* Clicking the board when a game is over should reset the board so that a new game can be played.

## Coding the Game

To code the game, you're going to have to stretch yourself especially if this is the first time you've coded anything to completion. The lecture on adding interactivity gives you all the necessary components, but now you have to problem solve in order to bring it all together.

You'll need to use the `document` object to access your `HTML` elements. Use these hints to guide you:

* The functions you'll need to use are: 
  * `document.querySelector` and `document.querySelectorAll`
  * `textContent` property of the cells.
  * The click event passes in an object that has a `target` property. This is the element that was clicked!
  * `addEventListener` will let you respond to events on an element like "click".

### Be sure to:

* Ask questions in Discord or setup a mentoring session if you are a Molecular or Catalyst student.
* Use Google, Stack Overflow, MDN and other resources to help you when you feel stuck.
* Have fun! This will probably be frustrating in a lot of ways, but when you finish, you will have learned something of significance. You'll be able to use the skills you learn to build other front-end ideas you have.