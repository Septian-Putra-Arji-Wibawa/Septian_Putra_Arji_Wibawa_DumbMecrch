import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from '../Pages/PageStyle';
import {Button,Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
import DumbMerch from '../Componen/Frame.png'
import adminImage from '../Componen/adminImage.png'

function OffCanvasAdmin() {

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
                <img style={formStyle.offCanvasDumbmerch}  src={DumbMerch} alt="" />
            </Offcanvas.Title>
        </Offcanvas.Header>
                    
        <Offcanvas.Body style={{backgroundColor:'#0B0B0B', color:'white', borderRight:'1px white solid'}}>
            <div style={{display:'flex'}}>
                <img style={formStyle.imgChatList} src={adminImage} alt=''/> 
                <div>
                    <p style={formStyle.nameList}>Username</p>
                    <p style={formStyle.chatList}>Yes, Is there anyting I can help ?</p>
                </div>
            </div>
                    
        </Offcanvas.Body>
                   
    </Offcanvas>
    </div>
  )
}

export default OffCanvasAdmin
