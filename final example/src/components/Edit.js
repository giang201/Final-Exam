import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

    const [name, setName] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate()

    var index = array.map(function (e) { return e.id; }).indexOf(id);

    const handelSubmit = (e) => {
        e.preventDefault();

        let a = array[index]

        a.Name = name
        a.LicensePlate = licensePlate

        history('/')
    }


    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setLicensePlate(localStorage.getItem('LicensePlate'))
        setid(localStorage.getItem('id'))
    }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>

                {/* setting a name from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control value={name}
                        onChange={e => setName(e.target.value)}
                        type="text" placeholder="Enter Name" />
                </Form.Group>

                {/* setting a age from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control value={licensePlate}
                        onChange={e => setLicensePlate(e.target.value)}
                        type="text" placeholder="Number" />
                </Form.Group>

                {/* Hadinling an onclick event running an edit logic */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="success" type="submit" size="lg">
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="primary" size="lg">Home</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Edit;
