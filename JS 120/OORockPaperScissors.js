const OPTIONS = ["Rock", "Papers", "Scissors"];
const createPlayer = (playerType) => {
  return {
    playerType,

    choose() {

    }
  }
}


const RPS = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  DisplayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing!");
  },

  play() {
    this.displayGoodbyeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};
RPS.play();