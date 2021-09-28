import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGamePage } from "../store/ui";
import { shuffle, drawCards } from "../store/game-logic";
export default function LoadingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffle());
    setTimeout(() => dispatch(setGamePage()), 200);
  });

  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
