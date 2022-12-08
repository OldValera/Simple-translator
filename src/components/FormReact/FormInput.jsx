import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import styles from '../FormReact/FormReact.module.scss'
import Container from 'react-bootstrap/Container';
import { setActivelenguage } from '../../redux/slices/translateSlice'
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { translateRequest } from '../../redux/slices/translateSlice'
import debounce from "lodash.debounce";
import ListGroup from 'react-bootstrap/ListGroup';
import Accor from "../Accor/Accor";

const FormInput = () => {

    const dispatch = useDispatch();

    const { activeLenguage, translateTo } = useSelector(state => state.translate);
    const [value, setValue] = useState();

    const changeLenguage = (key) => {
        dispatch(setActivelenguage(key))
        console.log(activeLenguage)
    }

    const changeValue = (str) => {
        const obj = {
            txt: str,
            leng: activeLenguage,
            transTo: translateTo
        }
        debounceRequest(obj)
    }

    const debounceRequest = useCallback(
        debounce(obj => getResponse(obj), 300),
        []
    )

    const getResponse = (obj) => {
        dispatch(translateRequest(obj))
    }

    return (
        <Form className={styles.FormInput} >
            <Container>
                <ListGroup horizontal onSelect={changeLenguage}>
                    <ListGroup.Item eventKey={"ru"} active={activeLenguage === 'ru' ? true : false}>Русский</ListGroup.Item>
                    <ListGroup.Item active={activeLenguage === 'en' ? true : false} eventKey={"en"}>Английский</ListGroup.Item>
                    <ListGroup.Item eventKey={"de"} active={activeLenguage === 'de' ? true : false}>Немецкий</ListGroup.Item>
                </ListGroup>
                <Form className={styles.border}>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> </Form.Label>
                        <Form.Control value={value} as="textarea" rows={6}
                            onChange={(e) => {
                                changeValue(e.target.value)
                                setValue(e.target.value)
                            }}
                        />
                    </Form.Group>
                </Form>
            </Container>
        </Form >
    );
}
export default FormInput;