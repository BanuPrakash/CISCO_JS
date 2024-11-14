import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  let { id } = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`).then(response => {
      setProduct(response.data);
    })
  }, [id])

  return (
    <div>
      <h1>Product Details</h1> 
      {
        product && <div>
          Name: {product.title} <br />
          Category : {product.category}
          <img src={product.image} />
          </div>
      }
    </div>
  )
}
