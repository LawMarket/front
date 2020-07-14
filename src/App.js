import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../src/components/Layout/Header/Header";
import Footer from "../src/components/Layout/Header/Footer";
import LawyersCards from "../src/components/Lawyers/LawyersCards";
import LawyerItem from "../src/components/Lawyers/LawyerItem";
import FlipCard from "../src/components/Cards/FlipCard";
import Register from '../src/components/auth/Regiester';
import Login from '../src/components/auth/Login';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Route exact path="/" component={FlipCard} />
        <section className="App">
          <Switch>
            <Route exact path="/lawyeritem" component={LawyerItem} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <Route exact path="/" component={LawyersCards} />
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
