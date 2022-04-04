import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from './PageStyle';
import Navigasi from '../Componen/Navigasi';
import { InputGroup, FormControl} from 'react-bootstrap';
import profAdmin from '../Componen/profAdmin.png';
import OffCanvasUser from '../Componen/OffCanvasUser';

function Complain ()  {

  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainComplain}>
            <div style={formStyle.containerContentComplain}>

                <div style={formStyle.containerLeftComplain}>
                <OffCanvasUser/>
                </div>

                <div style={formStyle.containerRightComplain}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img style={formStyle.imgChat} src={profAdmin} alt=''/>
                    <p style={formStyle.chat}>Hello Admin, I Need Your Help</p>
                </div>
                <InputGroup>
                    <FormControl
                    placeholder="Message "
                    type='text'
                    style={formStyle.messageInput}
                    aria-label="message"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Complain