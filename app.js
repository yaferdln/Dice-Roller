function rollDice() {
  
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    const dice4 = Math.floor(Math.random() * 6) + 1;
    const dice5 = Math.floor(Math.random() * 6) + 1;
    const dice6 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = `images/dice${dice1}.jpeg`;
    document.getElementById("dice2").src = `images/dice${dice2}.jpeg`;
    document.getElementById("dice3").src = `images/dice${dice3}.jpeg`;
    document.getElementById("dice5").src = `images/dice${dice4}.jpeg`;
    document.getElementById("dice5").src = `images/dice${dice5}.jpeg`;
    document.getElementById("dice6").src = `images/dice${dice6}.jpeg`;
  }
  