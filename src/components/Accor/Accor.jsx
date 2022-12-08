import React from "react";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';

const Accor = () => {
    const { favoirets } = useSelector(state => state.translate);
    return (
        <Container style={{}} className="mt-5" >
            <Accordion style={{ width: 322 }} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ width: 320, }}>Избранное</Accordion.Header>
                    <Accordion.Body style={{ width: 322 }}>
                        <ListGroup variant="flush">
                            {
                                favoirets.items.map(item => (
                                    <ListGroup.Item>
                                        <Badge bg="secondary">{item.activeLenguage} --- {item.translateTo} </Badge>{' '}<br />
                                        <span style={{ color: 'blue' }}>{item.origText}</span> <br /> <span>{item.translated}</span>
                                    </ListGroup.Item>
                                ))

                            }
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </Container>
    )
}
export default Accor;