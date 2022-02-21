# Tic Tac Toe

## Short Description

A browser version of the classic Tic Tac Toe game!

[Link to Tic Tac Toe Page](https://apwaite.github.io/tic-tac-toe/)

## Instructions

During play an on hover effect clearly indicates which section of the grid the player will place their mark. Players can tell whether it's their turn by looking for the underlined player or by reading the instructions above the gameboard. The instructions above the gameboard also displays the winner or whether there's a draw. When a draw or win occurs a game over overlay appears on top of the gameboard, announcing the winner and preventing any further marks from being placed. Players can reset the game by clicking a try again button that appears as part of the overlay during a draw or win, or they choose to start a new game at any time by clicking the new game button below the gameboard.

## Features

This project uses two different patterns:

1. The factory function pattern which is used as an alternative to constructors or classes to create and return new objects.
2. The module pattern which utilises IIFEs (Immediately Invoked Function Expressions) for encapsulation. This allows for namespacing, a technique used to helps avoid naming collisions when creating new variables.

## Challenges

The primary goal of this project was to have as little global code as possible. I was able to achieve this by utilising both the factory function pattern and the modern pattern. When I only required one of something I used the module pattern and when I required multiples of something (players) I created them with factories. The first challenge was identifying which objects I needed. I eventually decided on using a Player factory function to create the players, a gameboard object to store and render the gameboard and a display controller module to manage and handle the game logic.

With a plan in place, I moved on to creating an array within the gameboard module that would store the positions marked by players on the gameboard. I then created a function that looped through and rendered the contents of the array, appending each div element with class names and their own unique identifier using the items own array index and template literals. From here I was able to add the gameboard using CSS grid before adding styling. This took some time to do as I was unfamiliar with CSS grid, but after completing this project I feel significally more comfortable creating layouts using a combination of grid and flexbox. I initially rendered the gameboard using test data inserted into the array to confirm that it was working correctly.

The next challenge was creating a function that would allow players to add their marks to the gameboard, checking whether that position had been taken before displaying an error or appending the marker to the DOM and storing the players mark inside the gameboard array. This took a fair bit of trial and error to accomplish, as well as a lot of logging and testing in the developer tools console. Eventually I settled on selecting all elements with a class of ".cell", looped through each item and added event listeners before using a series of nested conditionals to check whether the position had been marked and determining whether that mark resulted in a draw or a winner. If there was no winner, no draw and the position had yet to be marked by another player, the current players move would end and the player would switch. To ensure the outcome was obvious to players at each stage I added an instructions div and populated it with relevant information using textContent.
