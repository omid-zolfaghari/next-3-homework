"use client"
import {edit, deleteSome} from "../utils/action"
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";


export default function PostList({posts}) {

  const [value, setValue] = useState(posts)

  return (
    <List sx={{ my:"2", display : "flex", justifyContent : "center", gap :"10px", flexWrap : "wrap"}}>
      {value.map((post)=>(
          <Box key={post.id}>
            <ListItem>
                <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={async(e)=> {
                    e.preventDefault()
                    await edit(`http://localhost:3000/api/posts/${post.id}`, post)
                }
                }>
               <ListItemText>
                <TextField label= "edit title" placeholder="edit title.." onChange={(e)=>{
                  const index = value.findIndex(item => item.id === post.id)
                  const arr = [...value]
                  arr[index].title = e.target.value
                  setValue(arr)
                } }  value={post.title}/>
               </ListItemText>
               <ListItemText>
                <TextField label= "edit body"  placeholder="edit body"  onChange={(e)=>{
                  const index = value.findIndex(item => item.id === post.id)
                  const arr = [...value]
                  arr[index].body = e.target.value
                  setValue(arr)
                } } value={post.body}/>
               </ListItemText>
               <Button variant="contained" color="error" onClick={()=>deleteSome(`http://localhost:3000/api/posts/${post.id}`)}>
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
