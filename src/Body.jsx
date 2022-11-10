import React from 'react'
import './Body.css'


{/* <img src="/image-product-mobile.jpg" className="mobileProduct" alt="Perfume Mobile" /> */}

function Body() {
  return (
    <div className='body-contain'>
      <h2 className='perfume-text'>Perfume</h2>
      <h1 className='title'>Gabrielle Essence Eau De Parfum</h1>
      <p className='description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <div className="price-tag">
        <div className="discount-price">$149.99</div>
        <div className="price">$169.99</div>
      </div>
      <button className='btn'>Add to Cart</button>
    </div>
  )
}

export default Body

/*<!-- Gabrielle Essence Eau De Parfum

A floral, solar and voluptuous interpretation composed by Olivier Polge, 
Perfumer-Creator for the House of CHANEL.

$149.99
$169.99

Add to Cart --> */