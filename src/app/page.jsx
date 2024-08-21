import UserCard from "@/components/UserCard";
import PostCard from "@/components/PostCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";
import RecipCard from "@/components/RecipCard";



export default async function Home() {
  const data = await getData("http://localhost:3000/api/users");
  const data2 = await getData("https://dummyjson.com/posts");
  const data3 = await getData("https://dummyjson.com/recipes")
  
  return (
    <>
    <Container maxWidth = {700}>
      <Box marginBottom={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          USERS
        </Typography>
      </Box>
    <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data.map((user) =>{
        return <UserCard key={user.id} item={user}/>
      })
     }
    </Stack>

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
    <Box marginY={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          RECIPES
        </Typography>
      </Box>
      <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data3.recipes.map((recipe) =>{
        return <RecipCard key={recipe.id} item={recipe}/>
      })
     }
    </Stack>
    </Container>
    </>
  );
}
