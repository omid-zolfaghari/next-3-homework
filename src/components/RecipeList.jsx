"use client"
import {edit, deleteSome} from "../utils/action"
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";



export default function RecipeList({recipes}) {
    const [value, setValue] = useState(recipes)
  return (
    <List sx={{ my:"2", display : "flex", justifyContent : "center", gap :"10px", flexWrap : "wrap"}}>
    {value.map((recipe)=>(
        <Box key={recipe.id}>
          <ListItem>
              <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={async(e)=>{
                e.preventDefault() 
              await edit(`http://localhost:3000/api/recipes/${recipe.id}`, recipe)
              }
              }>
             <ListItemText>
              <TextField label="edit name" placeholder="edit name.." onChange={(e)=>{
                const index = value.findIndex(item => item.id === recipe.id)
                const arr = [...value]
                arr[index].name = e.target.value
                setValue(arr)
              } }  value={recipe.name}/>
             </ListItemText>
             <ListItemText>
              <TextField label="edit ingredients" placeholder="edit ingredients"  onChange={(e)=>{
                const index = value.findIndex(item => item.id === recipe.id)
                const arr = [...value]
                arr[index].ingredients = e.target.value
                setValue(arr)
              } } value={recipe.ingredients}/>
             </ListItemText>
             <ListItemText>
              <TextField label="edit instructions"  placeholder="edit instructions" onChange={(e)=>{
                const index = value.findIndex(item => item.id === recipe.id)
                const arr = [...value]
                arr[index].instructions = e.target.value
                setValue(arr)
              } } value={recipe.instructions}/>
             </ListItemText>
             <Button variant="contained" color="error" onClick={()=>deleteSome(`http://localhost:3000/api/users/${user.id}`)}>
              delete
             </Button>
             <Button variant="contained" type="submit">
                Save changes
             </Button>
              </form>
          </ListItem>
        </Box>
    )
    )}
  </List>
  )
}
