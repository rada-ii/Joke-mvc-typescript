class Joke {
  readonly id: number;
  readonly setup: string;
  readonly punchline: string;

  constructor(data: Joke) {
    this.id = data.id;
    this.setup = data.setup;
    this.punchline = data.punchline;
  }
}

export default Joke;
