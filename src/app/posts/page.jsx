import PostCard from "@/components/PostCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

export async function generateMetadata() {
  return{
    title : "Posts",
    description : "Posts of dummyjson"
  }
}

const Pcard = dynamic(()=>import("../../components/PostCard"), {
  loading : ()=> <p>Loading please wait...</p>
})

export default async function page() {
  
  const data2 = await getData("https://dummyjson.com/posts");

  return (
    <Container>
      <Box marginY={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          POSTS
        </Typography>
      </Box>
      <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data2.posts.map((post) =>{
        return <Pcard key={post.id} item={post}/>
      })
     }
    </Stack>
    </Container>
  )
}
