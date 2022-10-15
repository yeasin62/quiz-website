import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';



const Topics = () => {
    const topics = useLoaderData();
    const subjects = topics.data;
    console.log(subjects);
    return (
        <div>
            <Container>
                <Row xs={1} md={2} xl={4} className="g-4">
                    {
                        subjects.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Topics;