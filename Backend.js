let cards = [
    "Herz Ace", "Herz 2", "Herz 3", "Herz 4", "Herz 5", "Herz 6", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig",
    "Kreuz Ace", "Kreuz 2", "Kreuz 3", "Kreuz 4", "Kreuz 5", "Kreuz 6", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig",
    "Peack Ace", "Peack 2", "Peack 3", "Peack 4", "Peack 5", "Peack 6", "Peack 7", "Peack 8", "Peack 9", "Peack 10", "Peack Bube", "Peack Dame", "Peack Koenig",
    "Quaro Ace", "Quaro 2", "Quaro 3", "Quaro 4", "Quaro 5", "Quaro 6", "Quaro 7", "Quaro 8", "Quaro 9", "Quaro 10", "Quaro Bube", "Quaro Dame", "Quaro Koenig",
    "Joker (rot)", "Joker (schwarz)"
  ];
  
  function displayRandomCard() {
    if (cards.length === 0) {
      document.getElementById("selected-card").innerHTML = "Es sind keine Karten mehr im Deck";
      document.getElementById("random-card-button").disabled = true;
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * (cards.length));
    const card = cards[randomIndex];
    cards.splice(randomIndex, 1);
    document.getElementById("selected-card").innerHTML = "Your random card is: " + card;
  }