import React from "react";
import { useDispatch } from "react-redux";
import styles from "../components/Card.module.css";
import Column from "../components/Column";
export default function GamePage() {
  const dispatch = useDispatch();
  const clickHandler = ({ target, target: { id } }) => {
    if (!["left", "middle", "right"].includes(id)) return;
    target.className.toggle("selected");
  };
  return (
    <div onClick={clickHandler} className={styles.board}>
      <Column id="left" position={0} />
      <Column id="middle" position={1} />
      <Column id="right" position={2} />
    </div>
  );
}
