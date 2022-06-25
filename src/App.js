import "./App.css";
import React, { Component } from "react";
import CardList from "./components/cardList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchTerm: "",
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
            console.log(`The current monester list ${this.state.monsters}`);
          }
        )
      );
  }

  onSearchChange = (e) => this.setState({ searchTerm: e.target.value });

  render() {
    const { monsters, searchTerm } = this.state;
    const filteredArray = monsters.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className=" App-header">
        <h1>All monestrs</h1>
        <input
          type="search"
          className="search-box"
          placeholder="search monesters"
          onChange={this.onSearchChange}
        />
        <CardList list={filteredArray} />
      </div>
    );
  }
}

export default App;
