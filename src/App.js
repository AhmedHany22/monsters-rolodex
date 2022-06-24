import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  render() {
    return (
      <div>
        <h1>All monestrs</h1>
        <ul>
          {this.state.monsters.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
