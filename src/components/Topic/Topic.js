import React from 'react';
import { Col,Card, Button } from 'react-bootstrap';
import './Topic.css';

const Topic = ({topic}) => {
    const {name, id, logo, total} = topic;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {total}
                </Card.Text>
                <Button>Start Practice</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topic;