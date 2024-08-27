"use client"

import { useState } from "react";
import {add} from "../utils/action"
import { Button, TextField } from "@mui/material"


export default function PostForm() {

const [postValue, setPostValue] = useState({title : "", body : ""})

async function handleSubmit(e) {
    e.preventDefault();
    await add("http://localhost:3000/api/posts", postValue)
    setPostValue({title : "", body : ""})
    
}

  return (
    <form style={{display :"flex", flexDirection:"column", gap:"10px"}} onSubmit={handleSubmit}>
      <TextField label="title" size="small" fullWidth value={postValue.title} onChange={(e)=> setPostValue({...postValue, title:e.target.value})} variant="outlined" placeholder="enter title "/>
      <TextField label="body" size="small" fullWidth value={postValue.body} onChange={(e)=> setPostValue({...postValue, body:e.target.value})} variant="outlined" placeholder="enter body"/>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  )
}
