import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from './PageStyle';
import Navigasi from '../Componen/Navigasi';
import { InputGroup, FormControl} from 'react-bootstrap';
import adminImage from '../Componen/adminImage.png';
import OffCanvasAdmin from '../Componen/OffCanvasAdmin';

function AdminComplain ()  {

  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainComplain}>
            <div style={formStyle.containerContentComplain}>

                <div style={formStyle.containerLeftComplain}>
                <OffCanvasAdmin />
                </div>

                <div style={formStyle.containerRightComplain}>
                <div style={{display:'flex', alignItems:'center'}}>
                   
                    <p style={formStyle.chatToAdmin}>Hello Admin, I Need Your Help</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img style={formStyle.imgChat} src={adminImage} alt=''/>
                    <p style={formStyle.chat}>Yes, Is there anyting I can help ?</p>
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

export default AdminComplain