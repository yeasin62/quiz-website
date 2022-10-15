import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './Topic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button> Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                </Card.Body>
                <Card.Text>
                    Total Questions: {total}
                </Card.Text>
            </Card>
        </Col>
    );
};

export default Topic;