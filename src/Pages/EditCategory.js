import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from '../Componen/Navigasi';
import formStyle from './PageStyle';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap';

function EditCategory() {
  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainEditCategory}>
            <div style={formStyle.containerContentEditCategory}>
            <h1 style={formStyle.textOnHomepage}>Edit Category</h1>
            <Form>
                <InputGroup>
                    <FormControl
                    placeholder="Category"
                    type='text'
                    style={formStyle.inputOnLogin}
                    aria-label="Category"
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

export default EditCategory