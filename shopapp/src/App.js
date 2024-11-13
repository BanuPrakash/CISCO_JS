import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Default from './components/Default'

const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart...</h1>}>
            <Cart />
          </Suspense>
        } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details...</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
