let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

const input = document.querySelector("#input");
const answer = document.querySelector("#answer");
const button = document.querySelector("#guess-button");

// let guessedNumber = 0;

// const updateValue = (e) => {
//   guessedNumber = e.target.value;
// };

button.hasAttribute("disabled") ? (button.style.cursor = "not-allowed") : null;

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  }
});

const toggleDisabled = () => {
  button.toggleAttribute("disabled");
  button.classList.toggle("disabled");
};

!input.value ? toggleDisabled() : null;

input.addEventListener("input", (e) => {
  if (!input.value) {
    button.hasAttribute("disabled") ? null : toggleDisabled();
  } else {
    button.hasAttribute("disabled") ? toggleDisabled() : null;
  }
});

const playGuess = () => {
  if (button.innerHTML === "Rejouer ?") {
    input.value = "";
    button.innerHTML = "Guess";
    button.style.backgroundColor = "#e01c1c";
    answer.innerHTML = "";
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  } else {
    let guess = parseInt(input.value);
    // guess = guessedNumber;
    if (guess == randomNumber) {
      answer.innerHTML = `Bravo ! Il fallait bien deviner ${guess}`;
      button.style.backgroundColor = "#1ee65d";
      button.innerHTML = "Rejouer ?";
    } else if (guess > 100 || parseInt(guess) < 0 || !Number.isInteger(guess)) {
      answer.innerHTML = `${guess} n'est pas une entrée valide`;
    } else if (guess < randomNumber) {
      answer.innerHTML = `Faux ! C'est plus grand que ${guess}`;
    } else if (guess > randomNumber) {
      answer.innerHTML = `Faux ! C'est plus petit que ${guess}`;
    }
  }
};

button.addEventListener("click", playGuess);
