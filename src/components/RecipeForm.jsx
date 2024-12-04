"use client"

import { useState } from "react";
import {add} from "../utils/action"
import { Button, TextField } from "@mui/material"



export default function RecipeForm() {

    const [recipeValue, setRecipeValue] = useState({name : "", ingredients : "", instructions : ""})

    async function handleSubmit(e) {
        e.preventDefault();
        await add("http://localhost:3000/api/recipes", recipeValue)
        setUserValue({name : "", ingredients : "", instructions : ""})
    }


  return (
    <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={handleSubmit}>
      <TextField label = "name" size="small" fullWidth value={recipeValue.name} onChange={(e)=> setRecipeValue({...recipeValue, name:e.target.value})} variant="outlined" placeholder="enter name"/>
      <TextField label = "ingredients" size="small" fullWidth value={recipeValue.ingredients} onChange={(e)=> setRecipeValue({...recipeValue, ingredients:e.target.value})} variant="outlined" placeholder="enter ingredients "/>
      <TextField label = "instructions" size="small" fullWidth value={recipeValue.instructions} onChange={(e)=> setRecipeValue({...recipeValue, instructions:e.target.value})} variant="outlined" placeholder="enter instructions"/>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  )
}
