import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function ProductList() {
  let [products, setProducts] = useState();

  // componentDidMount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5")
      .then(response => {
        setProducts(response.data);
      })
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {
          products && products.map(product => <ProductCard
            key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}
