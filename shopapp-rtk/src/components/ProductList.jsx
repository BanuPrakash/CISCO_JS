import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useGetProductsQuery } from '../redux/api/productApi';

export default function ProductList() {
  // let [products, setProducts] = useState();

  // // componentDidMount
  // useEffect(() => {
  //   //  axios.get("https://fakestoreapi.com/products?limit=5")
  //   axios.get("http://localhost:1234/products")
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  // }, []);

  const { data: products, error, isLoading, isFetching, isSuccess } = useGetProductsQuery();

  return (
    <div className='container'>

      {isLoading && <h1>Loading...</h1>}
      {isFetching && <h1>Fetching...</h1>}
      {error && <h1> Something went wrong... </h1>}

      {
        isSuccess && (
          <div className='row'>
            {
              products && products.map(product => <ProductCard
                key={product.id} product={product} />)
            }
          </div>)
      }
    </div>
  )
}
