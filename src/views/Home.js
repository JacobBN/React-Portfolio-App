import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import devopsIcon from '../assets/azure-icons/DevOps Service Color/Azure DevOps.svg';
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
              <div className="card-icon-wrapper">
                <FontAwesomeIcon icon={faReact} color="#2867b2" size="9x" className="font-icon"/>
              </div>
              <div className="card-text-wrapper">
                <Card.Text>
                  This website was created using create-react-app. 
                  Check out React <a href="https://reactjs.org/">here</a>!
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Git Repository</Card.Header>
            <Card.Body>
              <div className="card-icon-wrapper">
                <FontAwesomeIcon icon={faGitAlt} color="indigo" size="9x" className="font-icon"/>
              </div>
              <div className="card-text-wrapper">
                <Card.Text>
                  All development on this site is publicly available on my Github.
                  Take a look at it <a href="https://github.com/JacobBN/React-Portfolio-App/">here</a>!
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="card-deck">
          <Card>
            <Card.Header as="h5">DevOps</Card.Header>
            <Card.Body>
              <div className="card-icon-wrapper">
                <img alt="DevOps Icon" src={devopsIcon} className="card-image"/>
              </div>
              <div className="card-text-wrapper">
                <Card.Text>
                  I'm also using <a href="https://azure.microsoft.com/en-us/services/devops/">Azure DevOps</a>, connected to the GitHub repository.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Render</Card.Header>
            <Card.Body>
              <div className="card-icon-wrapper">
                
              </div>
              <div className="card-text-wrapper">
                <Card.Text>
                  This site is deployed on <a href="https://www.render.com">render.com</a>.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;