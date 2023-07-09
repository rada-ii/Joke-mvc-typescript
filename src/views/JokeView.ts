import Joke from "../models/Joke";

export class JokeView {
  private container: HTMLElement;
  private loader: HTMLElement;
  private fetchButton: HTMLButtonElement;

  constructor() {
    this.container = document.getElementById("joke-container");
    this.loader = document.getElementById("loader");
    this.fetchButton = document.getElementById(
      "fetch-button"
    ) as HTMLButtonElement;
  }

  renderJoke(joke: Joke) {
    this.container.innerHTML = `
      <div class="joke">
        <p>${joke.setup}</p>
        <p>${joke.punchline}</p>
      </div>
    `;
  }

  showLoader() {
    this.loader.style.display = "block";
  }

  hideLoader() {
    this.loader.style.display = "none";
  }

  bindFetchButton(handler: () => void) {
    this.fetchButton.addEventListener("click", handler);
  }
}
