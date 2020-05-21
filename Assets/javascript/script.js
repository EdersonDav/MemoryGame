const classFront = "card-front"
const classBack = "card-back"
const classCard = "card"
const classIcon = "icon"

startGame()

function startGame() {
  initializeCards(game.createCards(game.techs))
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


function flipCard() {
  this.classList.add("flip")
}