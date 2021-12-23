import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Switch from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Knowledges from './pages/Knowledges';

//import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/knowledges" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;