// external imports
import { Switch, Route } from "react-router-dom";

// asset
import "./Assets/App.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// internal imports
import Resume from "./Pages/Resume";
import HomeV2 from "./Pages/HomeV2";
import Footer from "./Components/HomeV2/Footer";
import { useContext } from "react";
import { HelperContext } from "./Context/Helper";
import FamilyMP from "./Components/HomeV2/FamilyMP";
import NewsLetter from "./Components/Home/NewsLetter";
import GetApp from "./Components/HomeV2/GetApp";

function App() {
  const { checkScroll } = useContext(HelperContext);

  checkScroll();

  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={HomeV2} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={FamilyMP} />
        <Route exact path="/contact" component={NewsLetter} />
        <Route exact path="/about" component={GetApp} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
