import { count } from "../../App";


const Cart = ({carts, counter}) => {

    // const {recipe_id,recipe_name,preparing_time,calories} = carts;
    // console.log(recipe_name);
    console.log(carts);

    return (
        <div className="w-[35%]">
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
                                    <tr key={cart.id}>
                                    <th className="font-semibold text-[#282828CC]">{index+1}</th>
                                    <td>{cart.recipe_name}</td>
                                    <td>{cart.preparing_time}</td>
                                    <td>{cart.calories}</td>
                                    <td><button className="btn bg-[#0BE58A] rounded-full text-[#150B2B] font-medium">Preparing</button></td>
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
               <h2 className=" text-2xl font-semibold text-[#282828] text-center">Currently cooking: 02</h2>
               
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
                        <tr>
                            <th className="font-semibold text-[#282828CC]">1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className="btn bg-[#0BE58A] rounded-full text-[#150B2B] font-medium">Preparing</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = 45 minutes</td>
                            <td>Total Calories = 1050 calories</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
               </div>
               
            </div>
            </div>
        </div>
    );
};

export default Cart;