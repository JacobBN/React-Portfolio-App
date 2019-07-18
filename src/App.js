import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home'

function App() {
  return (
    <>
      <React.StrictMode>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exactly component={Home} pattern="/" />
            {/* <Route component={Page404} /> */}
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
