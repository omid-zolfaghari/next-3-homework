import PostCard from "@/components/PostCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";


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
        return <PostCard key={post.id} item={post}/>
      })
     }
    </Stack>
    </Container>
  )
}
