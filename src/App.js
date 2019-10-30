import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (evt) => setSearchField(evt.target.value);

  return (
    <div className="App">
      <h1>Monster Dex</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
      <CardList dataList={filteredMonsters} />
    </div>
  );
}

export default App;
