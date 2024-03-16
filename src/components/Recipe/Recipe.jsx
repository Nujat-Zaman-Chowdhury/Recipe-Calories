
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';
const Recipe = ({recipe, handleCookButton}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        
        <div className='font-fira w-[70%]'>
           <div className="card w-[369px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt="recipe" className="rounded-xl w-full h-[200px] object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#282828] font-semibold text-xl font-lexend">{recipe_name}</h2>
                <p className='text-[#878787] mt-4 mb-6'>{short_description}</p>
                <div className="h-full">
                <div className='h-full'>
                <h4 className='text-[#282828] font-medium font-lexend mb-4'>Ingredients: {ingredients.length}</h4>
                <ul className='text-[#878787] space-y-2'>
                    {
                        ingredients.slice(0,3).map((ingredient,index)=><li key={index} className="list-disc ml-4">{ingredient}</li>)
                        
                    }
                </ul>
                </div>
                <div className='text-[#282828CC] flex items-center gap-5 my-5'>
                    <div className='flex items-center'>
                    <IoTimeOutline />
                    <span className='ml-2'>{preparing_time} minutes</span>
                    </div>
                    <div className='flex items-center'>
                    <AiOutlineFire />
                    <span className='ml-2'>{calories} calories</span>
                    </div>
                </div>
                <button onClick={()=>handleCookButton(recipe)} className="btn bg-[#0BE58A] rounded-full text-[#150B2B] font-medium">Want to Cook</button>
                </div>
            </div>
            
            </div>
            
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleCookButton:PropTypes.func
}
export default Recipe;