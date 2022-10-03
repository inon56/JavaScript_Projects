

let blackjackGame = {
    'you': {'scoreSpan': '#yourBlackjackResult', 'div': '#yourBox', 'score': 0},
    'dealer': {'scoreSpan': '#dealerBlackjackResult', 'div': '#dealerBox', 'score': 0},
     'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
     'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11] }
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('sounds/swish.m4a')

document.querySelector('#blackjackHitButton').addEventListener('click', blackjackHit)
document.querySelector('#blackjackStandButton').addEventListener('click', dealerLogic)
document.querySelector('#blackjackDealButton').addEventListener('click', blackjackDeal)

function blackjackHit(){
    let card = randomCard()
    showCard(card, YOU)
    updateScore(card, YOU)
    // console.log(YOU['score'])
    showScore(YOU)
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][randomIndex]
}


function showCard(card, activePlayer){
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img')
        cardImage.src = `images/${card}.png`
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play()
    }
}

function blackjackDeal() {
    let yourImages = document.querySelector('#yourBox').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealerBox').querySelectorAll('img')

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove()
    }

    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove()
    }

    YOU['score'] = 0
    DEALER['score'] = 0
    document.querySelector('#yourBlackjackResult').textContent = 0;
    document.querySelector('#dealerBlackjackResult').textContent = 0;
    document.querySelector('#yourBlackjackResult').style.color = 'white';
    document.querySelector('#dealerBlackjackResult').style.color = 'white';
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
    // if adding 11 keeps me below 21 -> add 11. otherwise -> add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]
        }
        else {
            activePlayer['score'] += blackjackGame['cards'][card][0]
        }
    }
    else {
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }
    else
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
}

function dealerLogic() {
    let card = randomCard()
    showCard(card, DEALER)
    updateScore(card, DEALER)
    showScore(DEALER)
}

