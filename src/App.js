// external imports
import { Switch, Route } from "react-router-dom";

// asset
import "./Assets/App.scss";

// internal imports
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
