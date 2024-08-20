"use client"

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Image from "next/image"

import { useRouter } from "next/navigation"



function RecipCard({item}) {

  const router = useRouter()
  
  return (
    <Card sx={{height: "300px", maxWidth: "355px" , backgroundColor : "pink", overflowY : "visible"}}>
      <Image height={200} width={340} src={item.image}/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {item.ingredients}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=> router.push(`/recipes/${item.id}`)} variant="contained" color="inherit" size="small">Detail</Button>
    </CardActions>
  </Card>
  )
}

export default RecipCard
