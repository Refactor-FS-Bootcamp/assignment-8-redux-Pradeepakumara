import React from 'react'
import { Link } from 'react-router-dom'

const DisplayProducts = ({product}) => {
    const {id, title, image, price, category} = product

  return (
    <Link to={`/product/${id}`}  style={{ textDecoration: 'none' }} >
    <article className='product-item'>
        <div className='product-image'>
            <img src={image} alt="item" />
        </div>
        <div className='product-text'>
            <h1>{title}</h1>
            <h3>&#x24; {price}</h3>
            <p>{category}</p>
        </div>
    </article>
    </Link>
  )
}

export default DisplayProducts