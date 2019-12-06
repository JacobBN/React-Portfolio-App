import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './style/Portfolio.css';

function PortfolioOverview() {
  return (
    <>
      <div id="content">
        <CardDeck className="mb-4">
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck className="mb-4">
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Project Name</Card.Title>
              <Card.Text>Lorem Ipsum Thing A Ma Bobba</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created June 2019</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}

export default PortfolioOverview;