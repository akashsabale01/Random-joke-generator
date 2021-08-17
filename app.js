// https://official-joke-api.appspot.com/jokes/programming/random

const jokeButton = document.querySelector("button");
const jokePara = document.querySelector(".joke");

jokeButton.addEventListener("click", getJoke);

async function getJoke() {
  const jokeURL = "https://icanhazdadjoke.com/";

  const response = await fetch(jokeURL, {
    headers: {
      Accept: "application/json",
    },
  });

  const responseData = await response.json();

  jokePara.innerText = responseData.joke;
}
