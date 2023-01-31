// import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/productsActions';
import ProductComponents from './ProductComponents'

const ProductList = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <div>
        <ProductComponents />
    </div>
  )
}

export default ProductList