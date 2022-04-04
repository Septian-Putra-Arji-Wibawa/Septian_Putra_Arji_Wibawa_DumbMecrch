import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from './PageStyle';
import Navigasi from '../Componen/Navigasi';
import {Table,Button,Modal} from 'react-bootstrap';
import {useState} from 'react';
import CategoryDummy from '../Componen/CategoryDummy';

function ListCategory()  {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainCategory}>
            <div style={formStyle.containerContentCategory}>
                <h1 style={formStyle.textOnHomepage}>List Category</h1>
                <Table striped hover variant="dark">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Category Name</th>
                        <th>Action</th>
                        </tr>
                    </thead>

                    {
                    CategoryDummy.map((category) => (
                    <tbody>
                        <tr>
                        <td>{category.id}</td>
                        <td>{category.Category}</td>
                        <td>
                        <Button style={formStyle.buttonOnTable} variant="success">Edit</Button>{' '}
                        <Button style={{paddingLeft:'8%', paddingRight:'8%', marginLeft:'5%',}} variant="danger" onClick={handleShow}>Delete</Button>{' '}

                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>Yes</Button>
                            <Button variant="danger" onClick={handleClose}>No</Button>
                        </Modal.Footer>
                        </Modal>
                        </td>
                        </tr>
                    </tbody>
                     ))
                    }
                </Table>
            </div>
        </div>
    </div>
  )
}

export default ListCategory