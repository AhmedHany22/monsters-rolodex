import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/cardList";
import SearchBar from "./components/searchBar";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArray, setFilteredArray] = useState(monsters);

  const onSearchChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredArray(filtered);
  }, [searchTerm, monsters]);
  console.log("hi");

  return (
    <div className=" App-header">
      <h1>Yu-Gi-Oh Cards</h1>
      <SearchBar onSearchChange={onSearchChange} />
      <CardList list={filteredArray} />
    </div>
  );
};

export default App;
