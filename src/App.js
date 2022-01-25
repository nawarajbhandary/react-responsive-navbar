import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import keyFeatures from "./Pages/keyFeatures";
import Pricing from "./Pages/Pricing";
import Testimonials from "./Pages/Testimonials";
import Demo from "./Pages/Demo";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={keyFeatures} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
