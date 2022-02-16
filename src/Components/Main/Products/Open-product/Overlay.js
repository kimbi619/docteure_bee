import React from 'react'

const Overlay = ({ product }) => {
    const removeOverlay = (e) =>{
        e.target.parentElement.style.display = 'none';
    }
  return (
    <div className='overlay'>
        <div onClick={removeOverlay} className="shadow"></div>
        <div className="overlayContainer">
            <h1>{product.name}</h1>
        </div>
    </div>
  )
}

export default Overlay