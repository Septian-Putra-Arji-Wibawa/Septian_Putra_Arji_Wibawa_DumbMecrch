import React from 'react'
import formStyle from './PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from '../Componen/Navigasi';
import CardComp from '../Componen/CardComp';


function Homepage () {
  return (
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainHomepage}>
            <h1 style={formStyle.textOnHomepage}>Product</h1>
            <div style={formStyle.containerContentHomepage}>
            <CardComp/>
            </div>
        </div>
    </div>
  )
}


export default Homepage