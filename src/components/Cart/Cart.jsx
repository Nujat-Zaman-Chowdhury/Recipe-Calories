


import PropTypes from 'prop-types';

const Cart = ({carts, counter, handlePreparingButton , cooking, cookingCounter}) => {

    

return (
        <div className="w-full lg:w-1/3 p-4 lg:p-0">
            <div className="bg-base-100 shadow-xl  rounded-xl p-0 lg:p-3 border border-[#28282833]">
            <div className="w-full">
               <div className="space-y-4 w-full">
               <h2 className=" text-2xl font-semibold text-[#282828] text-center mt-2">Want to cook: {counter}</h2>
              
                <div className="">
                <div className="">
                    <table className="table text-[#878787] font-medium pl-0 font-fira">
                       
                        <thead>
                        <tr className='pl-0'>
                            <th className='pl-0'></th>
                            <th className='pl-0'>Name</th>
                            <th className='pl-0'>Time</th>
                            <th className='pl-0'>Calories</th>
                            <th className='pl-0'></th>
                        </tr>
                        </thead>
                        <tbody className='bg-[#28282808]'>

                        {
                            carts.map((cart,index)=>{
                                return(
                                    <tr key={cart.recipe_id} className='pl-0'>
                                    <th className="font-semibold text-[#282828CC]">{index+1}</th>
                                    <td className='pl-0'>{cart.recipe_name}</td>
                                    <td className='pl-0'>{cart.preparing_time} minutes</td>
                                    <td className='p-0'>{cart.calories} calories</td>
                                    <td className='p-0'><button onClick={()=>handlePreparingButton(cart)} className="p-2 lg:p-3 bg-[#0BE58A] rounded-full text-[#150B2B] font-medium text-sm font-lexend">Preparing</button></td>
                                    
                                </tr>  
                                )
                            })
                        }
                        </tbody>
                    </table>
                    </div>
                </div>
               </div>

            {/* ----------------------------- */}

               <div className="mt-8 space-y-4">
               <h2 className=" text-2xl font-semibold text-[#282828] text-center">Currently cooking: {cookingCounter}</h2>
               
                
               <div className="">
                    <table className="table text-[#878787] font-medium">
                        
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className='font-fira '>

                        {
                            cooking.map((item,index)=>{
                                return(
                                    <tr key={item.id} className='bg-[#28282808]'>
                                        <th className="font-semibold text-[#282828CC]">{index+1}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>   
                                    </tr>
                                )
                            })
                        }
                        
                        
                        <tr className='font-lexend font-medium'>
                            <td></td>
                            <td></td>
                            <td className='text-[#282828CC]'>Total Time = {cooking.reduce((p,c)=> p+c.preparing_time, 0)}   minutes</td>
                            <td className='text-[#282828CC]'>Total Calories = {cooking.reduce((p,c)=> p+c.calories, 0)}  calories</td>
                        </tr>
                        </tbody>
                    </table>
                    </div> 
                </div>
               </div>
               
            </div>
            </div>
        
    );
};
Cart.propTypes = {
    carts: PropTypes.array,
    cooking: PropTypes.array,
    counter: PropTypes.number,
    cookingCounter: PropTypes.number,
    handlePreparingButton:PropTypes.func
}
export default Cart;