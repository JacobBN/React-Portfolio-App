import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './style/Home.css';

function Home() {
  return (
    <>
      <div className="content">
        <h2>Welcome</h2>
        <p>My name is Jacob Nørgaard, and this is my portfolio website. 
          I love software development, and hope to show some interesting things on here. 
          If you have any feedback, please feel free to submit a comment on the GitHub 
          repository for this website.</p>
        <div className="card-deck">
          <Card>
            <Card.Header as="h5">Create React App</Card.Header>
            <Card.Body>
              <FontAwesomeIcon icon={faReact} color="#2867b2" size="9x" className="font-icon"/>
              <Card.Text>
                This website was created using create-react-app. 
                Check out React <a href="https://reactjs.org/">here</a>!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">GitHub</Card.Header>
            <Card.Body>
              <FontAwesomeIcon icon={faCodeBranch} color="indigo" size="6x" className="font-icon"/>
              <Card.Text>
                All development on this site is publicly available on my Github. 
                Take a look at it <a href="https://github.com/JacobBN/React-Portfolio-App/">here</a>!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;