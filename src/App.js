// external imports
import { Switch, Route } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

// asset
import "./Assets/App.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// internal imports
import Home from "./Pages/Home";
import BackToTop from "./Components/Helpers/BackToTop";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./Components/Home/Footer";
import Navigation from "./Components/Home/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="" component={PageNotFound} />
      </Switch>

      <Footer />

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348162264426"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>

      <BackToTop />
    </>
  );
}

export default App;
