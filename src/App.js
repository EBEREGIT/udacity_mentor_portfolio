// external imports
import { Switch, Route } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

// asset
import "./Assets/App.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// internal imports
import BackToTop from "./Components/Helpers/BackToTop";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./Components/Home/Footer";
import Navigation from "./Components/Home/Navigation";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import HomeV2 from "./Pages/HomeV2";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={HomeV2} />
        <Route exact path="/terms-of-use" component={TermsOfService} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>

      {/* <Footer /> */}

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348067723579"
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
