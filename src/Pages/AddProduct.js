import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from '../Componen/Navigasi';
import formStyle from './PageStyle';
import {InputGroup, FormControl, Button, Form, FloatingLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CardComp from '../Componen/CardComp';

function AddProduct() {
  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainEditCategory}>
            <div style={formStyle.containerContentEditCategory}>
            <h1 style={formStyle.textOnHomepage}>Add Product</h1>
            <Form>
                <InputGroup>
                    <FormControl
                    type='file'
                    style={formStyle.inputOnEditProductFile}
                    aria-label="name"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup>
                    <FormControl
                    placeholder="Name Product"
                    type='text'
                    style={formStyle.inputOnEditProduct}
                    aria-label="name"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <FloatingLabel style={{color:'white'}} controlId="floatingTextarea2"    label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '100px', marginTop:'2%', backgroundColor:'rgba(210, 210, 210, 0.25)', color:'white', }}
                    />
                </FloatingLabel>

                <InputGroup>
                    <FormControl
                    placeholder="Price"
                    type='text'
                    style={formStyle.inputOnEditProduct}
                    aria-label="price"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup>
                    <FormControl
                    placeholder="Stock"
                    type='text'
                    style={formStyle.inputOnEditProduct}
                    aria-label="stock"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button style={formStyle.buttonOnLogin}variant="success">Save</Button>
                </Form>
            </div>

        </div>
    </div>
  )
}

export default AddProduct