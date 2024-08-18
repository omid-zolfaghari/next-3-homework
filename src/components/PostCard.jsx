"use client"

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function PostCard({item}) {

  const router = useRouter()
  return (
    <Card sx={{height: "200px", maxWidth: "355px" , backgroundColor : "lightGreen", overflowY : "auto"}}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {item.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=> router.push(`/posts/${item.id}`)} variant="contained" color="inherit" size="small">Detail</Button>
    </CardActions>
  </Card>
  )
}
