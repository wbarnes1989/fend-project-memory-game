/*
 * Create a list that holds all of your cards
 */
const cards = ['Diamond', 'Plane', 'Anchor', 'Bolt', 'Cube', 'Leaf', 'Bicycle', 'Bomb', 'Diamond', 'Plane', 'Anchor', 'Bolt', 'Cube', 'Leaf', 'Bicycle', 'Bomb'];
let deck = document.querySelector('.deck');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// shuffle cards
shuffle(cards);
// Create card html
for (let i = 0; i < cards.length; i++) {

  if (cards[i] === 'Diamond') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-diamond"></i>' +
    '</li>';
  }

  if (cards[i] === 'Plane') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-paper-plane-o"></i>' +
    '</li>';
  }

  if (cards[i] === 'Anchor') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-anchor"></i>' +
    '</li>';
  }

  if (cards[i] === 'Bolt') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-bolt"></i>' +
    '</li>';
  }

  if (cards[i] === 'Cube') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-cube"></i>' +
    '</li>';
  }

  if (cards[i] === 'Leaf') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-leaf"></i>' +
    '</li>';
  }

  if (cards[i] === 'Bicycle') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-bicycle"></i>' +
    '</li>';
  }

  if (cards[i] === 'Bomb') {
    cards[i] = '<li class="card">' +
    '<i class="fa fa-bomb"></i>' +
    '</li>';
  }
}
// Append HTML to deck
for (let i = 0; i < cards.length; i++) {
  deck.innerHTML += cards[i];
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let openCards = [];

function cardClicked(clickEvent) {
  clickEvent.target.classList.add('match');
  openCards.push(clickEvent.target);

  if (openCards !== undefined || openCards.length !== 0) {
    if (openCards.length > 1) {
      console.log('there is more than one card selected');
      //cardMatch(openCards);
      cardsMatch = openCards[0].innerHTML == openCards[1].innerHTML;
      if (cardsMatch) {
        console.log('cards matched!');
      }

      if (!cardsMatch) {
        console.log('cards did not match');
        for (let i = 0; i < openCards.length; i++) {
          openCards[i].classList.remove('match');
        }
        openCards.pop();
        openCards.pop();
      }

    }
  }
}

function cardMatch() {

}

function cardsNotMatch() {

}

function addMove() {

}

deck.addEventListener('click', cardClicked);
