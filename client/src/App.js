import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import USHeadlines from "./pages/USHeadlines";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <div className="my-4"></div>
        <Switch>
          <Route exact path="/top-us" component={USHeadlines} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
