/*console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king"; 

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree); */


const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit:"hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
/*
function cardImage() {
	console.log(cardImage);
}
	
function suit() {
	console.log(suit);
}
*/	

const cardsInPlay = [];



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

checkForMatch(); 

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	
	
};
	


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