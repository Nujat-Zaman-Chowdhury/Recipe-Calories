
import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export let count = 0;
function App() {

  const [carts, setCarts] = useState([]);
  const [counter,setCounter] = useState(0);
  const [cookingCounter,setCookingCounter] = useState(0);

  const handleCookButton = (recipe)=>{
    const isExits = carts.find(c=>c.recipe_id === recipe.recipe_id);
    
    if(isExits){
      // alert("already added");
      toast("Already Exist!");
    }
    else{
    const newCarts = [...carts,recipe]
    setCarts(newCarts);
    setCounter(counter+1);
    } 
  }
  
  const [cooking, setCooking] = useState([])


  const handlePreparingButton = (cart)=>{
    console.log(cart.recipe_id);
     const isCooking = carts.filter(item=>item.recipe_id !== cart.recipe_id)
     if(isCooking){
    //   console.log(isCooking);
     

     const newCooking = [...cooking,cart]
     setCooking(newCooking);
     setCounter(counter-1);
     setCookingCounter(cookingCounter+1);
      setCarts(isCooking)
     }
  }

  return (
    <>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <div>
        <div className='mt-7 lg:mt-12 text-center space-y-6 p-5'>
                <h1 className='text-2xl lg:text-4xl text-[#150B2B] font-semibold'>Our Recipes</h1>
                <p className='w-full lg:w-[800px] text-[#150B2B99] mx-auto'>Each recipe carries with it a legacy of tradition, innovation, and personal interpretation, inviting cooks to infuse their own creativity and personality into every dish they prepare.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 mt-5 lg:mt-10'>
        <Recipes handleCookButton={handleCookButton}></Recipes>
        <Cart carts={carts} counter={counter} handlePreparingButton={handlePreparingButton} cooking={cooking} cookingCounter={cookingCounter}></Cart>
        <ToastContainer></ToastContainer>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
