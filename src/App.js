import React from 'react';
import NavBar from './components/NavBar'
import Card from 'react-bootstrap/Card';
import './views/style/home.css';

function Home() {
  return (
    <>
      <React.StrictMode>
        <NavBar/>
        <div className="content">
          <h2>Welcome</h2>
          <p>My name is Jacob Nørgaard, and this is my portfolio website. 
            I love software development, and hope to show some interesting things on here. 
            If you have any feedback, please feel free to submit a comment on the GitHub 
            repository for this website.</p>
          <div class="card-deck">
            <Card>
              <Card.Header as="h5">Create React App</Card.Header>
              <Card.Body>
                <Card.Text>
                  This website was created using create-react-app. 
                  Check out React <a href="https://reactjs.org/">here</a>!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">GitHub</Card.Header>
              <Card.Body>
                <Card.Text>
                  All development on this site is publicly available on my Github. 
                  Take a look at it <a href="https://github.com/JacobBN/React-Portfolio-App/">here</a>!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </React.StrictMode>
    </>
  );
}

export default Home;
