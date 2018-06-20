var MemoryGame = function(deckOfCards) {
  this.cards = deckOfCards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.pickedCards = [];
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  var shuffledArray = [];

  while (shuffledArray.length < 24){
    var randomNumber = Math.floor(Math.random() * this.cards.length);
    var randomElement = this.cards[randomNumber];
    shuffledArray.push(randomElement);
    this.cards.splice(randomNumber, 1);
  }
  this.cards = shuffledArray;
};


  //   var arrayLength = cardsArr.length, t, i;
  //
  //   while (arrayLength){
  //     i = Math.floor(Math.random() * arrayLength--);
  //      -- is the decrement arithmetic operator
  //
  //     t = cardsArr[arrayLength];
  //     cardsArr[arrayLength] = cardsArr[i];
  //     cardsArr[i] = t;
  //   }
  //   return cardsArr;
  // };
/* Im not that smart to come up with this, found a good website
that explained the Fisher Yates Shuffle,
(https://bost.ocks.org/mike/shuffle/)
so this code here should   take a random card, "shuffle" it by placing it in the
"back" or end of the array, as its pulling from the front of the array
illustrations showed that creating a new array copy to store shuffled cards would slow the shuffle
process substantially as it checks to see if a card was already shuffled
I guess with smaller entries in the array not a big deal but maybe
would make things more complicated with larger data sets, not sure, need
to read up on this */

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard.attr('name') === secondCard.attr('name')) {
    this.pairsGuessed++;
    return true;
  } else if (firstCard !== secondCard) {
    return false;
  }
};
// dont need the else if, its a bit redundant. can just return false outside of the If

MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed <= 11) {
    return false;
  } else if (this.pairsGuessed === 12)
    return true;
  };
// a clever approach | return this.pairsGuessed >= 12;
