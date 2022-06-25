import styles from "./cardList.module.scss";

import React, { Component } from "react";

class CardList extends Component {
  state = {};
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    );
  }
}

export default CardList;
