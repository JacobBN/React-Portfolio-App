import React from 'react';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import PortfolioOverview from './views/PortfolioOverview';
import PortfolioItem from './views/PortfolioItem';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <> {/* <app>? */}
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        {/* Consider combining the following two and having common code in same file */}
        <Route exact path='/portfolio' component={PortfolioOverview} />
        <Route path='/portfolio/:id' component={PortfolioItem} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
