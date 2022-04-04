import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from '../Pages/PageStyle';
import {Button,Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
import DumbMerch from '../Componen/Frame.png'
import profAdmin from '../Componen/profAdmin.png'

function OffCanvasUser() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
    <Button style={formStyle.buttonOnComplain} variant="danger" onClick={handleShow}>
        Open Me
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{backgroundColor:'#0B0B0B', borderRight:'1px white solid'}} closeButton>
            <Offcanvas.Title>
                <img style={formStyle.offCanvasDumbmerch}  src={DumbMerch} alt=''/>
            </Offcanvas.Title>
        </Offcanvas.Header>
                    
        <Offcanvas.Body style={{backgroundColor:'#0B0B0B', color:'white', borderRight:'1px white solid'}}>
            <div style={{display:'flex'}}>
                <img style={formStyle.imgChatList} src={profAdmin} alt=''/> 
                <div>
                    <p style={formStyle.nameList}>Username</p>
                    <p style={formStyle.chatList}>Hello Admin, I Need Your Help</p>
                </div>
            </div>
                    
        </Offcanvas.Body>
                   
    </Offcanvas>
    </div>
  )
}

export default OffCanvasUser
