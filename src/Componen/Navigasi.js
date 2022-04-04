import React from 'react';
import DumbMerch from '../Componen/Frame.png';
import formStyle from '../Pages/PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigasi () {
  return (
    <Navbar style={{backgroundColor:'#0B0B0B',}}>
    <img style={formStyle.ImageOnNavbar} src={DumbMerch} alt=""/>

    <Nav style={formStyle.HeaderLinkOnNavbar} >
      <Link to={'/add-product'} style={formStyle.LinkOnNavbar}>Add</Link>
      <Link to={'/user-complain'} style={formStyle.LinkOnNavbar}>Complain</Link>
      <Link to={'/profile'} style={formStyle.LinkOnNavbar}>Profile</Link>
      <Link to={'/homepage'} style={formStyle.LinkOnNavbar}>Home</Link>
      <Link to={'/'} style={formStyle.LinkOnNavbar}>Logout</Link>
    </Nav>
  </Navbar>
  )
}

export default Navigasi