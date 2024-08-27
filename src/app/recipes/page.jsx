import RecipCard from "@/components/RecipCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";
import { unstable_noStore } from "next/cache";
import dynamic from "next/dynamic";


export async function generateMetadata() {
  return{
    title : "Recipes",
    description : "Recipes of dummyjson"
  }
}

const Rcard = dynamic(()=>import("../../components/RecipCard"), {
  loading : ()=> <p>Loading please wait...</p>
})

export default async function page() {
  unstable_noStore()
  const data3 = await getData("http://localhost:3000/api/recipes")
  
  return (
    <Container sx={{marginY:"3rem"}}>
      <Box marginY={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          RECIPES
        </Typography>
      </Box>
      <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data3.map((recipe) =>{
        return <Rcard key={recipe.id} item={recipe}/>
      })
     }
    </Stack>
    </Container>
  )
}
