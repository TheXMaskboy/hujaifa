document.addEventListener("DOMContentLoaded", function() {
    // Select all card elements
    const cards = document.querySelectorAll(".card > *");
  
    // Add click event listener to each card
    cards.forEach((card, index) => {
      card.addEventListener("click", function() {
        // Move the clicked card to the bottom
        card.style.zIndex = -index;
  
        // Bring the next card forward
        if (index < cards.length - 1) {
          cards[index + 1].style.zIndex = 7;
        }
      });
    });
  });
  