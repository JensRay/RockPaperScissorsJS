const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER = 'PLAYER_WINS'
const RESULT_COMPUTER = 'COMPUTER_WINS'

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === PAPER)
    ? RESULT_PLAYER
    : RESULT_COMPUTER;
  
  //   if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   pChoice === PAPER && cChoice === ROCK ||
  //   pChoice === ROCK && cChoice === SCISSORS ||
  //   pChoice === SCISSORS && cChoice === PAPER
  //   ) {
  //   return RESULT_PLAYER;
  // } else {
  //   return RESULT_COMPUTER;
  // }


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChice) {
    winner = getWinner(computerChoice, playerChoice)
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`
  if (winner === RESULT_DRAW) {
    message += " had a draw.";
  } else if (winner === RESULT_PLAYER) {
    message += " won!";
  } else {
    message += " lost"
  }
  alert(message);
  gameIsRunning = false;
});