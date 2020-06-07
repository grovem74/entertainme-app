import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import axios from 'axios';
import "materialize-css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
// import MoviePage from "./pages/Movies";
// import Celebrities from "./pages/Celebrities";
// import Profile from "./pages/Profile";
import SiteFooter from "./components/SiteFooter";

const App = () => {
  const [token, setToken] = useState(null);
  console.log({ token });
  useEffect(() => {
    axios.get('/test')
      .then(response => console.log(response))
      .catch(err => console.log(err));

    axios.get('/all')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  });
  return (
    <Router>
      <NavBar token={token} />
      <Switch>
        <Route exact path="/">
          <Home
            token={token}
          />
        </Route>
      </Switch>
      <SiteFooter />
    </Router>
  );
}

export default App;
