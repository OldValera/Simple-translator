import React from "react";
import Form from 'react-bootstrap/Form';
import styles from '../FormReact/FormReact.module.scss'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Accor from "../Accor/Accor";
import { useDispatch } from "react-redux";
import { setTranslateLenguage } from '../../redux/slices/translateSlice'
import { saveFavouireteWord } from "../../redux/slices/translateSlice";

import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
const FormOutPut = () => {


    const { translatedText, status, translateTo, currentText, favoirets, activeLenguage } = useSelector(state => state.translate);
    const dispatch = useDispatch();
    const changeLenguage = (key) => {
        dispatch(setTranslateLenguage(key))
    }

    const saveWord = () => {
        const data = {
            origText: currentText,
            translated: translatedText,
            translateTo: translateTo,
            activeLenguage: activeLenguage
        }
        dispatch(saveFavouireteWord(data))
        console.log(favoirets)

    }
    return (
        <Form className={styles.FormInput}>
            <Container>
                <div className="d-flex">

                    <ListGroup horizontal onSelect={changeLenguage}>

                        <ListGroup.Item style={{ cursor: 'pointer' }} active={translateTo === 'en' ? true : false} eventKey={"en"}>Английский</ListGroup.Item>
                        <ListGroup.Item eventKey={"ru"} active={translateTo === 'ru' ? true : false}>Русский</ListGroup.Item>
                        <ListGroup.Item eventKey={"de"} active={translateTo === 'de' ? true : false}>Немец</ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button onClick={() => saveWord()} variant="outline-warning" className={styles.butt}> в избранное</Button>
                    </div>

                </div>
                <Form className={styles.border}>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> </Form.Label>
                        <Form.Control placeholder="Перевод" as="textarea" rows={6} value={status == 'loading' ? 'Translating...' : translatedText} />
                    </Form.Group>
                </Form>

            </Container>

        </Form>
    )
}
export default FormOutPut