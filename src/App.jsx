
import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

export let count = 0;
function App() {

  const [carts, setCarts] = useState([])
  const [counter,setCounter] = useState(0)

  
  
  const handleCookButton = (recipe)=>{
    const newCarts = [...carts,recipe]
    setCarts(newCarts)

  
    setCounter(counter+1);
  }

  return (
    <>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <div>
        <div className='mt-12 text-center space-y-6 p-5'>
                <h1 className='text-2xl lg:text-4xl text-[#150B2B] font-semibold'>Our Recipes</h1>
                <p className='w-full lg:w-[800px] text-[#150B2B99] mx-auto'>Each recipe carries with it a legacy of tradition, innovation, and personal interpretation, inviting cooks to infuse their own creativity and personality into every dish they prepare.</p>
        </div>
        <div className='flex gap-4 mt-10'>
        <Recipes handleCookButton={handleCookButton}></Recipes>
        <Cart carts={carts} counter={counter}></Cart>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
