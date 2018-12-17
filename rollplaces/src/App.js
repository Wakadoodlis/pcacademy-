import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/contacts";
import Login from "./components/login";
import Signup from "./components/signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
