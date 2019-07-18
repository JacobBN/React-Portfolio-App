import React from 'react';
import NavBar from './components/NavBar'

function Home() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <NavBar/>
          <Switch>
            <Route exactly component={Home} pattern="/" />
            <Route exactly component={Page1} pattern="/path1" />
            <Route exactly component={Page2} pattern="/path2" />
            <Route exactly component={Page3} pattern="/path3" />
            <Route component={Page404} />
          </Switch>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default Home;
