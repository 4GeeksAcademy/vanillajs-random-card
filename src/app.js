/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var cardElement = document.getElementById("theCard");

  //possible card values
  var cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // card suits
  var cardSuits = ["hearts", "spades", "clubs", "diamonds"];

  // generate a random card
  function randomCard() {
    // random value index and suit index
    var valueIndex = Math.floor(Math.random() * cardValues.length);
    var suitIndex = Math.floor(Math.random() * cardSuits.length);

    // Get the random card value and suit
    var cardValue = cardValues[valueIndex];
    var cardSuit = cardSuits[suitIndex];

    // Update the card element with the new value and suit
    cardElement.className = "card suit-" + cardSuit;
    cardElement.querySelector("#cardContent").textContent = cardValue;
  }

  // call main function
  randomCard();
};
