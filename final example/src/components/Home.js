import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let history = useNavigate()

    function setID(id, name, licensePlate) {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('License Plate', licensePlate);
    }


    function deleted(id) {

        var index = array.map(function (e) { return e.id; }).indexOf(id);

        array.splice(index, 1)

        history('/')
    }

    return (
        <div style={{ margin: '5rem' }}>
            <h2>List Car In Parking Lot</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>License Plate</th>
                    </tr>
                </thead>
                <tbody>

                    {/* Mapping though every element in the array
	and showing the data in the form of table */}
                    {array.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.LicensePlate}</td>

                                {/* getting theid,name, and age for storing these
		value in the jsx with onclick event */}
                                <td><Link to={`/edit`}><Button onClick={(e) =>
                                    setID(item.id, item.Name, item.LicensePlate)} variant="info">
                                    Modify</Button></Link></td>

                                {/* Using thr deleted function passing
	the id of an entry */}
                                <td><Button onClick={e => deleted(item.id)}
                                    variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {/* Button for redirecting to create page for
insertion of values */}
            <Link className="d-grid gap-2" to='/create'>
                <Button variant="primary" size="lg">Add</Button>
            </Link>
        </div>
    )
}

export default Home;
