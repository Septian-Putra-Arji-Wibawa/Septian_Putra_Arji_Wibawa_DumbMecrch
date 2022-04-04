import React from 'react';
import formStyle from './PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import DumbMerch from '../Componen/Frame.png';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';

function Login() {

    return (
        <div>
            <div style={formStyle.containerMainLogin}>
                <div style={formStyle.containerContentLogin}>
                    
                    <div style={formStyle.containerLeftLogin}>
                    <img src={DumbMerch} alt=''/>
                    <p style={formStyle.HeaderOfMoto}>Easy, Fast and Reliable</p>
                    <p style={formStyle.Vision}>Go shopping for merchandise, just go to dumb merch shopping. <br/> the biggest merchandise in Indonesia</p>
                    <Button style={formStyle.RightButtonLogin}variant="danger">Login</Button>
                    <Button style={formStyle.RightButtonRegister}>Register</Button>
                    </div>
                    
                    <div style={formStyle.containerRightLogin}>
                    <h1 style={formStyle.loginText}>Login</h1>

                    <Form >
                        <InputGroup>
                        <FormControl
                        placeholder="Email"
                        type='text'
                        name='email'
                    
                        style={formStyle.inputOnLogin}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup>
                        <FormControl
                        placeholder="password"
                        type='password'
                        name='password'
                        style={formStyle.inputOnLogin}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button style={formStyle.buttonOnLogin} variant="danger" type='submit'>Login</Button>
                    </Form>
                    
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Login