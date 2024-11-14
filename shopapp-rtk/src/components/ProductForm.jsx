import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// controlled component
// export default function ProductForm() {
//   let navigate = useNavigate();
//   let [title, setTitle] = useState();
//   let [price, setPrice] = useState();

//   function addProduct() {
//     let product = {
//       title,
//       price,
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
//     }

//     axios.post('http://localhost:1234/products', product).then(res => {
//       console.log(res);
//       navigate('/')
//     }
//     );
//   }
//   return (
//     <div>
//       <h1>ProductForm</h1>
//       <form>
//         Title <input type="text" onChange={(evt) => setTitle(evt.target.value)} /> <br />
//         Price <input type="number" onChange={(evt) => setPrice(+evt.target.value)} /> <br />
//         <button type="button" onClick={addProduct}>Add Product</button>
//       </form>
//     </div>
//   )
// }

// uncontrolled
export default function ProductForm() {
  let navigate = useNavigate();
  let titleRef = useRef();
  let priceRef = useRef();

  function addProduct() {
    let product = {
      title: titleRef.current.value,
      price: +priceRef.current.value,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }

    axios.post('http://localhost:1234/products', product).then(res => {
      console.log(res);
      navigate('/')
    }
    );
  }
  return (
    <div>
      <h1>ProductForm</h1>
      <form>
        Title <input type="text" ref={titleRef} /> <br />
        Price <input type="number" ref={priceRef} /> <br />
        <button type="button" onClick={addProduct}>Add Product</button>
      </form>
    </div>
  )
}
