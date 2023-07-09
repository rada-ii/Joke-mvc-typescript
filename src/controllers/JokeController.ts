import axios from "axios";
import Joke from "../models/Joke";
import { JokeView } from "../views/JokeView";

export class JokeController {
  private view: JokeView;

  constructor() {
    this.view = new JokeView();
    this.view.bindFetchButton(this.getRandomJoke.bind(this));
  }

  async getRandomJoke() {
    try {
      this.view.showLoader();
      const response = await axios.get<Joke>(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      );
      const joke = new Joke(response.data[0]);
      this.view.renderJoke(joke);
    } catch (error) {
      console.error(error);
    } finally {
      this.view.hideLoader();
    }
  }
}
