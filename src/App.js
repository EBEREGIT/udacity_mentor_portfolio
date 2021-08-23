// external imports
import { Switch, Route } from "react-router-dom";

// asset
import "./Assets/App.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// internal imports
import Home from "./Pages/Home";
import BackToTop from "./Components/Helpers/BackToTop";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <BackToTop />
    </>
  );
}

export default App;
