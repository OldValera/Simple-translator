
// import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import styles from '../components/FormReact/FormReact.module.scss'
// import Container from 'react-bootstrap/Container';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// // import { setTranslateLenguage } from '../../redux/slices/translateSlice'


// import Accordion from 'react-bootstrap/Accordion';
// import Offcanvas from 'react-bootstrap/Offcanvas';







import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import ListGroup from 'react-bootstrap/ListGroup';

















// const TestForm = () => {

//     const { translatedText, status, translateTo } = useSelector(state => state.translate);
//     const dispatch = useDispatch();
//     const changeLenguage = (key) => {
//         // dispatch(setTranslateLenguage(key))
//     }

//     return (
//         <Form className={styles.FormInput}>
//             <Container>
//                 <div className='d-flex pl-30'>
//                     <ListGroup horizontal onSelect={changeLenguage}>
//                         <ListGroup.Item eventKey={"ru"} active={translateTo === 'ru' ? true : false}>Русский</ListGroup.Item>
//                         <ListGroup.Item active={translateTo === 'en' ? true : false} eventKey={"en"}>Английский</ListGroup.Item>
//                     </ListGroup>
//                     <Accordion>
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header>Избранное</Accordion.Header>
//                             <Accordion.Body>
//                                 дабадабадабдабадабадабдабадаб
//                                 дабадабадабдабадабадабдабад
//                                 дабадабадабдабадабадабдаба
//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>
//                 </div>
//                 <Form className={styles.border}>
//                     <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                         <Form.Label> Перевод</Form.Label>
//                         <Form.Control as="textarea" rows={6} value={status == 'loading' ? 'Translating...' : translatedText} />
//                     </Form.Group>
//                 </Form>

//             </Container>

//         </Form>

//     );
// }
// export default TestForm;
const TestForm = () => {
    return (
        //     <>
        //         (
        //         <Navbar key={true} bg="light" expand={true} className="mb-3">
        //             <Container fluid>
        //                 <Navbar.Brand href="#">Navbar Offcanvasss</Navbar.Brand>
        //                 <Navbar.Toggle />
        //                 <Navbar.Offcanvas


        //                     placement="end"
        //                 >
        //                     <Offcanvas.Header closeButton>
        //                         <Offcanvas.Title id={'Жопы'}>
        //                             Offcanvasssss
        //                         </Offcanvas.Title>
        //                     </Offcanvas.Header>
        //                     <Offcanvas.Body>
        //                         <Nav className="justify-content-end flex-grow-1 pe-3">
        //                             <Nav.Link href="#action1">Home</Nav.Link>
        //                             <Nav.Link href="#action2">Link</Nav.Link>
        //                             <NavDropdown
        //                                 title="Dropdownxui"

        //                             >
        //                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        //                                 <NavDropdown.Item href="#action4">
        //                                     Another action
        //                                 </NavDropdown.Item>
        //                                 <NavDropdown.Divider />
        //                                 <NavDropdown.Item href="#action5">
        //                                     Something else here xui
        //                                 </NavDropdown.Item>
        //                             </NavDropdown>   ////
        //                         </Nav>
        //                         <Form className="d-flex">
        //                             <Form.Control
        //                                 type="searchxui"
        //                                 placeholder="Search"
        //                                 className="me-2"
        //                                 aria-label="Search"
        //                             />
        //                             <Button variant="outline-success">Searchxui</Button>
        //                         </Form>
        //                     </Offcanvas.Body>
        //                 </Navbar.Offcanvas>
        //             </Container>
        //         </Navbar>
        //         )
        //     </>
        <>

            <Form className="border">
                <Container>
                    <ListGroup horizontal >
                        <ListGroup.Item >Английский</ListGroup.Item>
                        <ListGroup.Item >Русский</ListGroup.Item>
                    </ListGroup>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> </Form.Label>
                            <Form.Control placeholder="Перевод" as="textarea" rows={6} />
                        </Form.Group>
                    </Form>

                </Container>

            </Form>
        </>
    )

}
export default TestForm;