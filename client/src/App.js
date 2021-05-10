import React from "react";
import "./App.css";
import Bar from "./components/Bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Notifier from "./components/Notifier";

function App() {
  return (
    <Router>
      <Bar />
      <Notifier />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
