"use client"

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

import { useRouter } from "next/navigation"


export default function UserCard({item}) {

  const router = useRouter()

  return (
    <Card sx={{height: "200px", maxWidth: "355px" , backgroundColor : "lightBlue"}}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {`${item.firstName + " " + item.lastName}`}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {`Email : ${item.email}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=> router.push(`/users/${item.id}`)} variant="contained" color="secondary" size="small">Detail</Button>
    </CardActions>
  </Card>
  )
}
