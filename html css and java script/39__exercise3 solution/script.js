const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the computer go to the doctor? Because it caught a virus!",
  "Why was the math book sad? Because it had too many problems.",
  "What do you call fake spaghetti? An Impasta!",
  "Why did the student eat his homework? Because the teacher said it was a piece of cake.",
  "Why can't your nose be 12 inches long? Because then it would be a foot.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why was the broom late? Because it swept in.",
  "Why don't skeletons fight each other? They don't have the guts."
];

const randomIndex = Math.floor(Math.random() * jokes.length);

document.getElementById("joke").innerHTML = jokes[randomIndex];