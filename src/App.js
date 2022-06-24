import React, { Component } from "react";
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
            console.log(this.state.monsters);
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
      <div>
        <h1>All monestrs</h1>
        <input
          type="search"
          className="search-box"
          placeholder="search monesters"
          onChange={this.onSearchChange}
        />
        <ul>
          {filteredArray.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
