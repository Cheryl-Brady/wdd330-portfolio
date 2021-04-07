// Variables
const cards = document.querySelectorAll('.card');
const startGameBtn = document.querySelectorAll("[data-start]");
const modal = document.getElementById("modal1");
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

//onload pop up modal with start game button
document.addEventListener("DOMContentLoaded", function() {
  //Disply the modal popup
  modal.style.display = "flex";
});
  
//start game button
for(const el of startGameBtn) {
  el.addEventListener("click", function() {
    modal.style.display = "none";
  });
  startGame();
}

function startGame() {
  addFlipEvent();

  // Add pictures to the cards with an AJAX request
  fetch('cardImages.json')
    .then( response => response.json())
    .then( data => {
        const imagesArray = Object.values(data);
        // DEBUG CHECK POINT
        //console.log(imagesArray);

        const cardElement = document.querySelectorAll(".card-front");
        let count = 0;
        cardElement.forEach((item, index) => {
          if (index % 2 === 0 && index != 0) {
            count++;
          }
          item.setAttribute("src", imagesArray[count].image);
        })
    })
    .catch( error => console.log('There was an error:', error))

  shuffle();
}


// EVENT LISTENER for card flips
function addFlipEvent() {
  cards.forEach(card => card.addEventListener('click', flipCard));
}


function shuffle() {
  cards.forEach(card => {
      let random = Math.floor(Math.random() * 16);
      card.style.order = random;
  });
};

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    
    if (!hasFlipped) {
      hasFlipped = !hasFlipped
      firstCard = this;
      return;
    }
    hasFlipped = !hasFlipped
    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
  let firstCardSrc = firstCard.querySelector(".card-front").getAttribute("src");
  let secondCardSrc = secondCard.querySelector(".card-front").getAttribute("src");
  
  if (firstCardSrc === secondCardSrc) {
          disableCards ();
          return;
    }
    else {
      unflipCards();
    }
  }


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}


function unflipCards() {
    lockBoard = true;
    setTimeout(()=> {
      if(firstCard) {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
      }   
    }, 1500);
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }


// EVENT LISTENER for reset button
const resetGameBtn = document.getElementById("reset-game-btn")
resetGameBtn.addEventListener('click', resetGame);


function resetGame() {
    // Grab img tag with class "card-front"
    const img = document.querySelectorAll("card-front");
    // Remove the src attribute
    img.forEach(item => {
      item.removeAttribute("src");
    });
    // Remove the flip class to unflip cards
    cards.forEach(item => {
      item.classList.remove('flip');
    })
    resetBoard();
    startGame();
}