import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './Topic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/topic/${id}`}>Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                </Card.Body>
                <Card.Text>
                    Total Questions: {total}
                </Card.Text>
            </Card>
        </Col>
    );
};

export default Topic;