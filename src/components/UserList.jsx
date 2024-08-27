"use client"
import {edit, deleteSome} from "../utils/action"
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";



function UserList({users}) {
  const [value, setValue] = useState(users)

    
  return (
    <List sx={{ my:"2", display : "flex", justifyContent : "center", gap :"10px", flexWrap : "wrap"}}>
      {value.map((user)=>(
          <Box key={user.id}>
            <ListItem>
                <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={async(e)=>{
                  e.preventDefault() 
                await edit(`http://localhost:3000/api/users/${user.id}`, user)
                }
                }>
               <ListItemText>
                <TextField label = "edit first name" placeholder="edit first name" onChange={(e)=>{
                  const index = value.findIndex(item => item.id === user.id)
                  const arr = [...value]
                  arr[index].firstName = e.target.value
                  setValue(arr)
                } }  value={user.firstName}/>
               </ListItemText>
               <ListItemText>
                <TextField label = "edit last name" placeholder="edit last name"  onChange={(e)=>{
                  const index = value.findIndex(item => item.id === user.id)
                  const arr = [...value]
                  arr[index].lastName = e.target.value
                  setValue(arr)
                } } value={user.lastName}/>
               </ListItemText>
               <ListItemText>
                <TextField label = "edit age"  placeholder="edit age" onChange={(e)=>{
                  const index = value.findIndex(item => item.id === user.id)
                  const arr = [...value]
                  arr[index].age = e.target.value
                  setValue(arr)
                } } value={user.age}/>
               </ListItemText>
               <ListItemText>
                <TextField label = "edit email" placeholder="edit email" type="email" onChange={(e)=>{
                  const index = value.findIndex(item => item.id === user.id)
                  const arr = [...value]
                  arr[index].email = e.target.value
                  setValue(arr)
                } } value={user.email}/>
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

export default UserList

