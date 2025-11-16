import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  
   const [cartItems, setCartItems] = useState([]);

  return (
<div className='flex flex-col justify-center items-center  '>
  <Header cartItems={cartItems} setCartItems={setCartItems} />
  <Product setCartItems={setCartItems}/>



</div>
  )
}

export default App
