import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCookButton}) => {

    const [recipes, setRecipes] = useState([])
    

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div>
            
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe} handleCookButton={handleCookButton}></Recipe>)
               }
            </div>
        </div>
        
    );
};

export default Recipes;

