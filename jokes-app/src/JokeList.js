import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
export default class JokeList extends Component {
  static defaultProps = {
    numOfJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes")) || [],
      loading: false,
    };

    this.loadedJokesIds = new Set(this.state.jokes.map((joke) => joke.id));
    this.getJokes = this.getJokes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    try {
      let jokesFetched = [];
      while (jokesFetched.length < this.props.numOfJokesToGet) {
        let response = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });

        let jokeData = response.data;
        console.log(jokeData);
        if (!this.loadedJokesIds.has(jokeData.id)) {
          this.loadedJokesIds.add(jokeData.id);
          jokesFetched.push({ id: jokeData.id, joke: jokeData.joke, votes: 0 });
        }
      }

      this.setState((st) => ({
        jokes: [...st.jokes, ...jokesFetched],
        loading: false,
      }));
      window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((joke) =>
          joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, () => this.getJokes());
  }

  render() {
    if (this.state.loading) {
      return (
        this.state.loading && (
          <div className="JokeList-loader">
            <i className="em em-grinning"></i>
            <h1 className="JokeList-loader__msg">Loading...</h1>
          </div>
        )
      );
    }
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">Jokes App</h1>
          <i className="em em-joy"></i>
          <button className="JokeList-getMore" onClick={this.handleClick}>
            New Jokes
          </button>
        </div>

        <div className="JokeList-jokes">
          {this.state.jokes
            .sort((j1, j2) => {
              return j2.votes - j1.votes;
            })
            .map((joke) => (
              <Joke
                key={joke.id}
                id={joke.id}
                votes={joke.votes}
                joke={joke.joke}
                upVote={() => this.handleVote(joke.id, 1)}
                downVote={() => this.handleVote(joke.id, -1)}
              />
            ))}
        </div>
      </div>
    );
  }
}
