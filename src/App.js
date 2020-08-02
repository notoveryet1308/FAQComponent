import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';
import FAQInputs from './pages/faqInputs';
import DisplayFaq from './pages/faqDisplay';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link className="link faq-input" to="/">FAQ Input</Link>
        <Link className="link faq-display" to="/faq-display">FAQ Display</Link>
      </div>
      <Switch>
        <Route exact path="/" component={FAQInputs} />
        <Route exact path="/faq-display" component={DisplayFaq} />
      </Switch>

    </div>
  );
}

export default App;
