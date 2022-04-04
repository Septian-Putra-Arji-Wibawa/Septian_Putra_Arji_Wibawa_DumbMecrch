import React, {useState} from 'react';
import formStyle from './PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import DumbMerch from '../Componen/Frame.png';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';

function Register() {

    const [state, setState] = useState({
        fullname:'',
        email:'',
        password:'',
    });

    const handleOnSumbit = (e) => {
        e.preventDefault();
        console.log(state)
    };

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };      

  return (
    <div>
        <div style={formStyle.containerMainLogin}>
            <div style={formStyle.containerContentLogin}>

                <div style={formStyle.containerLeftLogin}>
                <img src={DumbMerch} alt=''/>
                <p style={formStyle.HeaderOfMoto}>Easy, Fast and Reliable</p>
                <p style={formStyle.Vision}>Go shopping for merchandise, just go to dumb merch shopping. <br/> the biggest merchandise in Indonesia</p>
                <Button style={formStyle.RightButtonRegister}>Login</Button>
                <Button variant="danger" style={formStyle.RightButtonLogin}>Register</Button>
                </div>
                
                <div style={formStyle.containerRightRegister}>
                <h1 style={formStyle.loginText}>Register</h1>
                <Form onSubmit={handleOnSumbit}>
                <InputGroup>
                    <FormControl
                    placeholder="Name"
                    onChange={handleOnChange}
                    type='text'
                    name='fullname'
                    style={formStyle.inputOnLogin}
                    aria-describedby="basic-addon1"
                    />
                </InputGroup> 
                <InputGroup>
                    <FormControl
                    placeholder="Email"
                    type='email'
                    onChange={handleOnChange}
                    name='email'
                    style={formStyle.inputOnLogin}
                    aria-describedby="basic-addon1"
                    />
                </InputGroup> 
                <InputGroup>
                    <FormControl
                    placeholder="password"
                    type='password'
                    onChange={handleOnChange}
                    name='password'
                    style={formStyle.inputOnLogin}
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button style={formStyle.buttonOnLogin} onClick={handleOnSumbit} variant="danger">Register</Button>
                </Form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Register