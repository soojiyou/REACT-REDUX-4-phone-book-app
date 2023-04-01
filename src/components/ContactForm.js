import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phonenum, setPhonenum] = useState(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault(); //form엔 필수-> foam은 계속해서 reload 하려는 특징이 있기때문에 react가 reload되는걸 방지하기위함
        dispatch({ type: "ADD_CONTACT", payload: { name, phonenum } })
    }

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name to add" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Phone Numer</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number to add" onChange={(e) => setPhonenum(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm