import { useState } from 'react';
const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elevenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3
};

console.log(elvenShieldRecipe);
console.log(elevenGauntletsRecipe);

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
           <h3>current recipe: </h3> 
           <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven shield recipe</button>
           <button onClick={() => setRecipe(elevenGauntletsRecipe)}>Elven gauntlet recipe</button>
        
            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Recipes;