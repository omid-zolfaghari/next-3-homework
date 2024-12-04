import { recipeData } from "../route";

export async function GET(req, {params}) {
    const data = recipeData.find(recipe => recipe.id === params.id)
    return Response.json(data)
}

export async function PATCH(req, {params}) {
    const {name, ingredients, instructions} = await req.json();
    const index = recipeData.findIndex(recipe => recipe.id === params.id);
    recipeData[index].name = name;
    recipeData[index].ingredients = ingredients;
    recipeData[index].instructions = instructions;

    return Response.json(recipeData[index])
}


export async function DELETE(req, {params}) {
    const index = recipeData.findIndex(recipe => recipe.id === params.id);
    const deleted = recipeData[index]
    recipeData.splice(index, 1);
    return Response.json(deleted)
}