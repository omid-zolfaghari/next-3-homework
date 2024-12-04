"use client"

import { useState } from "react";
import {add} from "../utils/action"
import { Button, TextField } from "@mui/material"




function UserForm() {
const [userValue, setUserValue] = useState({firstName : "", lastName : "", age : "", email: ""})

async function handleSubmit(e) {
    e.preventDefault();
    await add("http://localhost:3000/api/users", userValue)
    setUserValue({firstName : "", lastName : "", age : "", email: ""})
    
}

  return (
    <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={handleSubmit}>
      <TextField label="first name" size="small" fullWidth value={userValue.firstName} onChange={(e)=> setUserValue({...userValue, firstName:e.target.value})} variant="outlined" placeholder="enter first name "/>
      <TextField label="last name" size="small" fullWidth value={userValue.lastName} onChange={(e)=> setUserValue({...userValue, lastName:e.target.value})} variant="outlined" placeholder="enter last name "/>
      <TextField label="age" size="small" fullWidth value={userValue.age} onChange={(e)=> setUserValue({...userValue, age:e.target.value})} variant="outlined" placeholder="enter age"/>
      <TextField label="email" size="small" fullWidth type="email" value={userValue.email} onChange={(e)=> setUserValue({...userValue, email:e.target.value})} variant="outlined" placeholder="enter email"/>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  )
}

export default UserForm
