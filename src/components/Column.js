import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import styles from "./Card.module.css";
// export default function Column({ position }) {
//   const cards = useSelector((state) => state.logic.columns)[position];

//   return (
//     <div className={`Column-${position}`} styles={styles.Column}>
//       {cards && cards.map((card) => <Card card={card} />)}
//     </div>
//   );
// }
export default function Column({ position }) {
  const cards = useSelector((state) => state.logic.columns[position]) || [];

  return (
    <div className={styles.column}>
      {cards.map((card) => (
        <Card key={card.code} card={card} />
      ))}
    </div>
  );
}
