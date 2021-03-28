import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./forms/Home";
import Signup from "./forms/Signup";
import Team from "./forms/Team";
import Reports from "./forms/Reports";
import Messages from "./forms/Messages";
import Support from "./forms/Support";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/team" component={Team} />
          <Route path="/reports" component={Reports} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
        </Switch>
        {/* <footer>All right is reserved.</footer> */}
      </Router>
    </>
  );
}

export default App;
