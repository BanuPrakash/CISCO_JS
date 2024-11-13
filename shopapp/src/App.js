import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import {Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
