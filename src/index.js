import "./styles/index.scss";
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