const classFront = "card-front"
const classBack = "card-back"
const classCard = "card"
const classIcon = "icon"
let techs = [
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
]
let cards = null;

startGame()

function startGame() {
  cards = createCards(techs)
  shuffleCards(cards)
  initializeCards(cards)

}

function initializeCards(cards) {
  let gameBoard = document.getElementById("boardCard")
  cards.forEach((card) => {
    let cardElement = document.createElement("div")
    cardElement.id = card.id
    cardElement.classList.add(classCard)
    cardElement.dataset.icon = card.icon
    creadCardContent(card, cardElement)
    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  })

}

function creadCardContent(card, cardElement) {
  createCardFace(classBack, card, cardElement)
  createCardFace(classFront, card, cardElement)
}

function createCardFace(face, card, cardElement) {
  let cardElementFace = document.createElement('div')
  cardElementFace.classList.add(face)
  if (face === classFront) {
    let img = document.createElement('img')
    img.classList.add(classIcon)
    img.src = "Assets/images/" + card.icon + ".png"
    cardElementFace.appendChild(img)
  } else {
    cardElementFace.innerHTML = "&lt/&gt"
  }
  cardElement.appendChild(cardElementFace)
}

function shuffleCards(cards) {
  let currentCards = cards.length
  let randomCards = 0

  while (currentCards != 0) {
    randomCards = Math.floor(Math.random() * currentCards)
    currentCards--
    [cards[randomCards], cards[currentCards]] = [cards[currentCards], cards[randomCards]]
  }
}

function createCards(techs) {
  let cards = []

  techs.forEach((tech) => {
    cards.push(createPair(tech))
  })
  //Flat Map separa os arrays
  return cards.flatMap(pair => pair)
}

function createPair(tech) {
  return [{
    id: createId(tech),
    icon: tech,
    flipped: false
  }, {
    id: createId(tech),
    icon: tech,
    flipped: false
  }]
}

function createId(tech) {
  return tech + parseInt(Math.random() * 1000)
}

function flipCard() {
  this.classList.add("flip")
}