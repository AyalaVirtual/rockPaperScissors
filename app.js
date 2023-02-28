const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
  } else {
      console.log("Error!");
  }
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return "rock";
    } else if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } 

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer chose paper! You lose!";
    } else {
      return "Computer chose scissors! You win!";
    }
  };

   if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Computer chose rock! You win!";
    } else {
      return "Computer chose scissors! You lose!";
    }
  };

    if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "Computer chose paper! You win!";
    } else {
      return "Computer chose rock! You lose!";
    }
  };

}

const playGame = () => {
  const userChoice = getUserChoice("rock", "paper", "scissors");
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`The computer chose ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

