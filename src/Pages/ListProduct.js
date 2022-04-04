import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from './PageStyle';
import Navigasi from '../Componen/Navigasi';
import {Table,Button,Modal} from 'react-bootstrap';
import {useState} from 'react';
import ProductDummy from '../Componen/ProductDummy';

function ListProduct()  {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainCategory}>
            <div style={formStyle.containerContentCategory}>
                <h1 style={formStyle.textOnHomepage}>List Product</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th style={{width:'1%'}}>No</th>
                        <th style={{width:'5%'}}>Photo</th>
                        <th style={{width:'5%'}}>Product Name</th>
                        <th style={{width:'10%'}}>Product Desc</th>
                        <th style={{width:'5%'}}>Price</th>
                        <th style={{width:'5%'}}>Qty</th>
                        <th style={{width:'10%'}}>Action</th>
                        </tr>
                    </thead>

                    {
                    ProductDummy.map((product) => (
                    <tbody>
                        <tr>
                        <td>{product.id}</td>
                        <td style={{overflow: 'hidden',
                            maxWidth: '20ch',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',}}>{product.Image}</td>
                        <td>{product.Name}</td>
                        <td style={{overflow: 'hidden',
                            maxWidth: '15ch',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',}}>{product.Desc}</td>
                        <td>{product.Price}</td>
                        <td>{product.Stock}</td>
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

export default ListProduct