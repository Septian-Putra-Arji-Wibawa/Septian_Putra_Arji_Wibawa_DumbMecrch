import React from 'react';
import formStyle from '../Pages/PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgMouse from '../Componen/mouse.png';
import DumbMerch from '../Componen/Frame.png';
import ProductDummy from './ProductDummy';


function MyTransaction() {
  return (
    <div>
       <div style={formStyle.containerMainTrx}>
            <div style={formStyle.containerLeftTrx}>
                <img style={{ maxWidth: '100%', maxHeight: '100%', padding:'1%' }} src={ImgMouse} alt=''/>
                    <div>
                        <h4 style={formStyle.headerOnTrx}>Mouse</h4>
                        <p style={formStyle.headerOnTrx}>19-09-2022</p>
                        <p style={formStyle.textOnTrx}>Price: </p>
                        <p style={formStyle.textOnTrx}>Sub Total: </p>
                    </div>
            </div>

            <div style={formStyle.containerRightTrx}>
                <img style={{  maxHeight: '60%', marginTop:'15%'}} src={DumbMerch} alt=''/>
            </div>
       </div>
    </div>
  )
}

export default MyTransaction