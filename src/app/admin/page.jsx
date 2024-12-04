import { Stack, Typography, Container, Button } from "@mui/material";
import Link from "next/link";



export default function page() {

const adminItems = [
    {title : "Users", route : "/admin/users"},
    {title : "Posts", route : "/admin/posts"},
    {title : "Recipes", route : "/admin/recipes"},
]

  return (
    <Container sx={{marginY : "4rem", display : "flex", flexDirection : "column", alignItems:"center", gap : "20px"}}>
      <Stack maxHeight={800} alignItems="center">
        <Typography color="error" variant="h3">Admin Page</Typography>
      </Stack>
      <Stack textAlign="center" direction="row" gap={3} maxWidth={500} alignItems="center">
        {adminItems.map((item,i) =>{
        return (<Button variant="contained" key={i}>
            <Link style={{textDecoration : "none", color : "#fff"}} href={item.route}>
            {item.title}
            </Link>
        </Button>)

        })}
      </Stack>

    </Container>
  )
}
