import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

    const [name, setName] = useState('');
    const [LicensePlate, setLicensePlate] = useState('');

    let history = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

        const ids = uuid()
        let uni = ids.slice(0, 8)

        let a = name, b = LicensePlate
        array.push({ id: uni, Name: a, LicensePlate: b })

        history('/')

    }

    return (
        <div >
            <h2>Add Name and License Plate</h2>
            <Form className="d-grid gap-2" style={{ margin: '5rem' }}>{ }
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={e => setName(e.target.value)}
                        type="name"
                        placeholder="Enter Name" required />
                </Form.Group>


                {/* Fetching a value from input textfirld in
    a setage using usestate*/}
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control onChange={e => setLicensePlate(e.target.value)}
                        type="licensePlate"
                        placeholder="Enter License Plate" required />
                </Form.Group>

                {/* handing a onclick event in button for
     firing a function */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="success" type="submit">
                    Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>

            </Form>
        </div>
    )
}

export default Create;