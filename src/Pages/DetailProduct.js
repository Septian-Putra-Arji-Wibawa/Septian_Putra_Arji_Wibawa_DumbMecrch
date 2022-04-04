import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyle from '../Pages/PageStyle';
import Navigasi from '../Componen/Navigasi';
import ImgMouse from '../Componen/mouse.png'
import {Button} from 'react-bootstrap';

function DetailProduct () {

  return ( 
    <div>
        <Navigasi/>
        <div style={formStyle.containerMainDetail}>
            <div style={formStyle.containerContentDetail}>

                <div style={formStyle.containerLeftDetail}>
                    <img style={formStyle.ImageOnDetail} src={ImgMouse} alt=""/>
                </div>  

                <div style={formStyle.containerRightDetail}>
                        <h1 style={formStyle.headerOnDetail}>Mouse</h1>
                        <p style={formStyle.specOnDetail}>Stok</p>
                        <br/>
                        <p style={formStyle.specOnDetail}>- Wireless Mouse </p>
                        <p style={formStyle.specOnDetail}>- Konektivitas wireless 2.4 GHz</p>
                        <p style={formStyle.specOnDetail}>- Jarak wireless hingga 10 m</p>
                        <p style={formStyle.specOnDetail}>- Plug and Play</p>
                        <p style={formStyle.specOnDetail}>- Baterai tahan hingga 12 bulan</p>
                        <br/>
                        <p style={formStyle.specOnDetail}>Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>  
                        <h3 style={formStyle.priceOnDetail}>Rp.6789876</h3>
                    <Button style={formStyle.buttonOnDetail} variant="danger">Buy</Button>{' '}
                </div>
            </div>

        </div>
    </div>
  )
}

export default DetailProduct