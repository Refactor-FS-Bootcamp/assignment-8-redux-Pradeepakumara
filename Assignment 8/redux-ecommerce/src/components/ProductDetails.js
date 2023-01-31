// import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchProduct, removeSelectedproduct, selectProduct } from '../redux/actions/productsActions';

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector(state => state.product)

  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {

    if (productId && productId !== "") {
      dispatch(fetchProduct(productId))
    }
    return () => {
      dispatch(removeSelectedproduct());
    }
  }, [productId])

  const {title, image, price, category, description } = product

  return (
    <section className='product-detail-section'>
      <div className='product-detail-container'>
        <article className='product-detail-item'>
          <div className='product-detail-image'>
          <img src={image} alt={title} />
          </div>
        </article>
        <article className='product-detail-item'>
          <h1>{title}</h1>
          <h4>${price}</h4>
          <h3>{category}</h3>
          <p>{description}</p>
          <button className='btn-add'>Add to Cart</button>
          <Link to={'/'}>
          <button className='btn-back'>Back</button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default ProductDetails