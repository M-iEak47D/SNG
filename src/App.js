import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/style.css";
import Sidenav from "./components/Common/Sidenav";
import Footer from "./components/Common/Footer";
import Packages from "./pages/Packages";
import ImageGallery from "./pages/ImageGallery";
import VideoGallery from "./pages/VideoGallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Reach from "./pages/Reach";
import Restaurant from "./pages/Restaurant";
import Team from "./pages/Team";
import Room from "./pages/Room";
import Checkout from "./pages/Checkout";
import CommingSoon from "./components/Ads/commingSoon";
import PackageSingle from "./pages/PackageSingle";

function App() {
  return (
    <Router>
      <Sidenav />
      <CommingSoon />
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/our_team">
          <Team />
        </Route>
        <Route exact path="/about_us">
          <About />
        </Route>
        <Route exact path="/reach">
          <Reach />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/image_gallery">
          <ImageGallery />
        </Route>
        <Route exact path="/room_details">
          <Room />
        </Route>
        <Route exact path="/video_gallery">
          <VideoGallery />
        </Route>
        <Route exact path="/packages">
          <Packages />
        </Route>
        <Route exact path="/package/:slug">
          <PackageSingle />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

//  <img src={process.env.PUBLIC_URL + "/images/"} />
