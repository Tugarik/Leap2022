let userGuess;
let random = 50;
do {
  userGuess = Number(prompt(" too oruulna uu"));
  if (userGuess < random) {
    console.log("baga bn");
  } else if (userGuess > random) {
    console.log("ih bn");
  } else {
    console.log("taalaa");
  }
} while (userGuess != random);
