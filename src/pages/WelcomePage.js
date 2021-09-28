import React from "react";
import { useDispatch } from "react-redux";
import { setLoadingPage } from "../store/ui";
export default function WelcomePage() {
  const dispatch = useDispatch();
  return (
    <>
      <header className="Game-header">
        <h3>Wanna see a Magic Trick</h3>
      </header>
      <button onClick={() => dispatch(setLoadingPage())}> Sure!! </button>
      <button> Nope... </button>
    </>
  );
}
