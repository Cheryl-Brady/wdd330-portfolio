const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlipped) {
      hasFlipped = true;
      firstCard = this;
      return;
    }

  secondCard = this;
  checkForMatch();
}

  
function checkForMatch() {
    if (firstCard.dataset.id === secondCard.dataset.id) {
          disableCards ();
          return;
    }
    else {
      unflipCards ();
    }
  }


function disableCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}


function unflipCards() {
    lockBoard = true;
    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }


(function shuffle() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));


