/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PlacesPage from 'containers/PlacesPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import WebFont from 'webfontloader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cruising from '../../components/RidingStyles/Cruising';
import Dancing from '../../components/RidingStyles/Dancing';
import Freeride from '../../components/RidingStyles/Freeride';
import Downhill from '../../components/RidingStyles/Downhill';
import Freestyle from '../../components/RidingStyles/Freestyle';
import Place from '../../components/Place';

export default function App() {
  WebFont.load({
    google: {
      families: ['Raleway:300,400,700', 'sans-serif'],
    },
  });
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/places" component={PlacesPage} />
          <Route exact path="/places/:id" component={Place} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/cruising" component={Cruising} />
          <Route exact path="/dancing" component={Dancing} />
          <Route exact path="/freeride" component={Freeride} />
          <Route exact path="/downhill" component={Downhill} />
          <Route exact path="/freestyle" component={Freestyle} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}
