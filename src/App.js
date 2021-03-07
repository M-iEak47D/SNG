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
import SingleBlog from "./pages/SingleBlog";
import Invoice from "./pages/Invoice";
import Test from "./pages/Test";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Common/Navbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <Router>
      <Sidenav />
      <CommingSoon />

      {/* <MessengerCustomerChat
        pageId={process.env.MESSENGER_PAGE_ID}
        appId={process.env.MESSENGER_APP_ID}
      /> */}
      {/* <MessengerCustomerChat pageId="100676832093931" appId="190474329081776" /> */}

      <Navbar />
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
        <Route exact path="/invoice">
          <Invoice />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route exact path="/blogs">
          <Blog />
        </Route>
        <Route exact path="/blog/:slug">
          <SingleBlog />
        </Route>
        <Route path="/image_gallery">
          <ImageGallery />
        </Route>
        <Route exact path="/room_details">
          <Room />
        </Route>
        <Route exact path="/single_room/:id">
          <SingleRoom />
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
        <Route exact path="/test">
          <Test />
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
