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

The primary goal of this project was to have as little global code as possible. To achieve this I utilised both the factory function pattern and the modern pattern. When I only required one of something I used the module pattern and when I required multiples of something (players) I created them with factories. The first challenge was identifying which objects I needed. I eventually decided on using a Player factory function to create the players, a gameboard object to store and render the gameboard and a display controller module to manage and handle the game logic.

With a plan in place, I moved on to creating an array within the gameboard module that would store the positions marked by players on the gameboard.
