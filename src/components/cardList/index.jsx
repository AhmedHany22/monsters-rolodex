import styles from "./cardList.module.scss";

import React, { Component } from "react";

class CardList extends Component {
  state = {};
  render() {
    const { list } = this.props;
    return (
      <div className={styles.cardList}>
        {list.map((monster) => {
          const { id, name } = monster;
          return (
            <div className={styles.cardContainer} key={id}>
              <img alt={`monster ${name}`} src={`./images/cards/${id}.jpg`} />
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
