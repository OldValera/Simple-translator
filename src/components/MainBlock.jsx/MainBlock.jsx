import React from "react";
import { Container } from "react-bootstrap";
import FormOutPut from "../FormOutPutReact/FormOutPut";
import FormInput from "../FormReact/FormInput";
const MainBlock = () => {
    return (
        <Container className="d-flex justify-content-flex-start align-items-center">
            <FormInput />
            <FormOutPut />
        </Container>
    )
}
export default MainBlock; 