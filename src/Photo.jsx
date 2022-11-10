import React from 'react'
import './Photo.css'

function Photo() {
    return(
        <div>
            <div className="mobile">
                <img src="./image-product-mobile.jpg" alt="Chanel" />
            </div>
            <div className="desktop">
                <img src="./image-product-desktop.jpg" alt="Chanel" />
            </div>
        </div>
    )
}

export default Photo