import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';
const Recipes = ({handleCookButton}) => {

    const [recipes, setRecipes] = useState([])
    

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className="">
            
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
               {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe} handleCookButton={handleCookButton}></Recipe>)
               }
            </div>
        </div>
        
    );
};
Recipes.propTypes = {
    handleCookButton: PropTypes.func,
}
export default Recipes;

