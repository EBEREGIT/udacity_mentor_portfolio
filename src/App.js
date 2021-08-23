// external imports
import { Switch, Route } from "react-router-dom";

// asset
import "./Assets/App.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// internal imports
import Home from "./Pages/Home";
import BackToTop from "./Pages/test";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
{/* 
      <Button className="btn_green" onclick="topFunction()" id="myBtn" title="Go to top"><KeyboardArrowUpIcon style={{ fontSize: 40 }} /></Button>    */}

      <BackToTop />   
    </>
  );
}

export default App;
