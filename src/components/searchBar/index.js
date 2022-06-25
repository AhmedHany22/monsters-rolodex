import styles from "./searchBar.module.scss";

import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input type="search" placeholder="search..." onChange={onSearchChange} />
    );
  }
}

export default SearchBar;
