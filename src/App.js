import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// Website pages
import Home from "./pages/Home";
import About from "./pages/About";
import MoreAbout from "./pages/MoreAbout";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="mb-5">
        Heading and nav go here...
      </header>
      <main className="mb-5">
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/more-about" component={MoreAbout} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

            <Redirect to="/home" />
        </Switch>
      </main>
      <footer>
        Footer details go here...
      </footer>
    </div>
  );
}

export default App;
