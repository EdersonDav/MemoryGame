let game = {

  lockMode: false,
  firstCard: null,
  secondCard: null,

  setCard: function (id) {
    let cardFlipped = this.cards.filter(card => card.id === id)[0];

    if (cardFlipped.flipCard || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = cardFlipped;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = cardFlipped;
      this.secondCard.flipped = true;
      this.lockMode = true;
      if (this.firstCard.id != this.secondCard.id) {

        return true;
      } else {
        alert("do not select the same card twice")
        window.location.reload()
      }
    }

  },

  checkMath: function () {
    console.log(this.firstCard)
    console.log(this.secondCard)

    if (!this.firstCard || !this.secondCard) {
      return this.firstCard.icon === this.secondCard.icon;
    }
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },
  unflipCards: function () {
    this.secondCard.flipped = false;
    this.firstCard.flipped = false;
    this.clearCards();
  },

  techs: [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react"
  ],
  cards: null,

  createCards: function () {
    this.cards = []

    this.techs.forEach((tech) => {
      this.cards.push(this.createPair(tech))
    })
    //Flat Map separa os arrays
    this.cards = this.cards.flatMap(pair => pair)
    this.shuffleCards()
    return this.cards
  },

  createPair: function (tech) {
    return [{
      id: this.createId(tech),
      icon: tech,
      flipped: false
    }, {
      id: this.createId(tech),
      icon: tech,
      flipped: false
    }]
  },

  createId: function (tech) {
    return tech + parseInt(Math.random() * 1000)
  },

  shuffleCards: function (cards) {
    let currentCards = this.cards.length
    let randomCards = 0

    while (currentCards != 0) {
      randomCards = Math.floor(Math.random() * currentCards)
      currentCards--
      [this.cards[randomCards], this.cards[currentCards]] = [this.cards[currentCards], this.cards[randomCards]]
    }
  }

}