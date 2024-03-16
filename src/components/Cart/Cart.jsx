


import PropTypes from 'prop-types';

const Cart = ({carts, counter, handlePreparingButton , cooking, cookingCounter}) => {

    

return (
        <div className="w-full lg:w-[40%] p-4 lg:p-0">
            <div className="card  bg-base-100 shadow-xl w-full">
            <div className="card-body">
               <div className="space-y-4">
               <h2 className=" text-2xl font-semibold text-[#282828] text-center">Want to cook: {counter}</h2>
              
                <div className="">
                <div className="">
                    <table className="table text-[#878787] font-medium">
                        {/* <!-- head --> */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            carts.map((cart,index)=>{
                                return(
                                    <tr key={cart.recipe_id}>
                                    <th className="font-semibold text-[#282828CC]">{index+1}</th>
                                    <td>{cart.recipe_name}</td>
                                    <td>{cart.preparing_time}</td>
                                    <td>{cart.calories}</td>
                                    <td><button onClick={()=>handlePreparingButton(cart)} className="btn bg-[#0BE58A] rounded-full text-[#150B2B] font-medium">Preparing</button></td>
                                    
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
                        <tbody>

                        {
                            cooking.map((item,index)=>{
                                return(
                                    <tr key={item.id}>
                                        <th className="font-semibold text-[#282828CC]">{index+1}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>   
                                    </tr>
                                )
                            })
                        }
                        
                        {/* <tr>
                            <th className="font-semibold text-[#282828CC]">1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            
                        </tr> */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = {cooking.reduce((p,c)=> p+c.preparing_time, 0)}   minutes</td>
                            <td>Total Calories = {cooking.reduce((p,c)=> p+c.calories, 0)}  calories</td>
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