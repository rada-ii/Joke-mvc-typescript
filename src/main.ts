import "./style.css";

import { JokeController } from "./controllers/JokeController";

const jokeController = new JokeController();
jokeController.getRandomJoke();
