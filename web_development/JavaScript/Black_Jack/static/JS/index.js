

let blackjackGame = {
    'you': {'scoreSpan': '#yourBlackjackResulet', 'div': '#yourBox', 'score': 0},
    'dealer': {'scoreSpan': '#dealerBlackjackResult', 'div': '#dealerBox', 'score': 0}
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

document.querySelector('#blackjackHitButton').addEventListener('click', blackjackHit)

function blackjackHit()
{
    let cardImage = document.createElement('img')
    cardImage.src = 'static/images/Q.png'
    document.querySelector(YOU['div']).appendChild(cardImage)
}

document.querySelector('#blackjackStandButton').addEventListener('click', blackjackHit)



document.querySelector('#blackjackDealButton').addEventListener('click', blackjackHit)