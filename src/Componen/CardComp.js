import React from 'react';
import {Card} from 'react-bootstrap'
import formStyle from '../Pages/PageStyle';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDummy from './ProductDummy';


function CardComp({}) {
  return (
    <>
    {
    ProductDummy.map((product) => (
    <div style={formStyle.containerCard}>
      <Card style={{width:'12rem', height:'60vh',marginTop:'2%', backgroundColor:'#212121'}}>
        <Card.Img variant="top" src={product.Image} style={{ maxWidth: '100%', maxHeight: '100%',}} />
        <Card.Body>
          <Link to={'/detail-product'} style={formStyle.HeaderOnCard}>{product.Name}</Link>
          <Card.Text style={formStyle.textOnCard}>
              Price: {product.Price}   <br/>
              Stock: {product.Stock}
          </Card.Text>
        </Card.Body>
        </Card>
    </div>
      ))
    }
    </>
  )
}

export default CardComp