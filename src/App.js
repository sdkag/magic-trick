import { useSelector } from "react-redux";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
import LoadingPage from "./pages/LoadingPage";
const pages = {
  GamePage,
  LoadingPage,
  WelcomePage,
};
function App() {
  const status = useSelector((state) => state.ui.pageStatus);
  const CurrentPage = pages[status];

  return <div className="App">{status && <CurrentPage />}</div>;
}

export default App;
