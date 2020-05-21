let game = {
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