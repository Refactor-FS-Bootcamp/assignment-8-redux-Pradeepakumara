import React from 'react'
import { useSelector } from 'react-redux'
import DisplayProducts from './DisplayProducts'

const ProductComponents = () => {

    const products = useSelector(state => state.allProducts.products)

    return (
        <section className='product-section'>
            <div className='product-container'>
                {
                    products.map(item => <DisplayProducts key={item.id} product={item} />)
                }
            </div>
        </section>
    )

}

export default ProductComponents