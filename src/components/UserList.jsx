"use client"
import {edit, deleteSome} from "../utils/action"
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";



function UserList({users}) {
const [editedValue, setEditedValue] = useState({
    firstName : "", lastName : "", age : "", email: ""
})

    async function handleEdit(e, url) {
        e.preventDefault()
        edit(url, editedValue)
        setEditedValue()
    }
  return (
    <List sx={{ my:"2", display : "flex", justifyContent : "center", gap :"10px", flexWrap : "wrap"}}>
      {users.map((user)=>(
          <Box key={user.id}>
            <ListItem>
                <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={(e)=>handleEdit(e, `http://localhost:3000/api/users/${user.id}`)}>
               <ListItemText>
                <TextField placeholder="edit first name"  onChange={(e)=> setEditedValue({...editedValue, firstName: e.target.value})}  defaultValue={user.firstName}/>
               </ListItemText>
               <ListItemText>
                <TextField placeholder="edit last name"  onChange={(e)=> setEditedValue({...editedValue, lastName: e.target.value})} defaultValue={user.lastName}/>
               </ListItemText>
               <ListItemText>
                <TextField placeholder="edit age" onChange={(e)=> setEditedValue({...editedValue, age: e.target.value})} defaultValue={user.age}/>
               </ListItemText>
               <ListItemText>
                <TextField placeholder="edit email" type="email" onChange={(e)=> setEditedValue({...editedValue, email: e.target.value})} defaultValue={user.email}/>
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

