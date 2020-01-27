/*console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king"; 

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree); */

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

checkForMatch(); 

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
}
	

flipCard(0);

flipCard(2);

/*


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/