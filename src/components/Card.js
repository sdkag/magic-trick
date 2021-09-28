import React from "react";
// import { useSelector } from "react-redux";
import styles from "./Card.module.css";
export default function Card({ card }) {
  // const card = useSelector((state) => state.cards[cardId]);
  return <img className={styles.card} src={card.image} alt="img" />;
}
