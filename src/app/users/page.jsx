import UserCard from "@/components/UserCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";



export default async function page() {
  const data = await getData("https://dummyjson.com/users");

  return (
    <Container>
      <Box marginBottom={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          USERS
        </Typography>
      </Box>
    <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data.users.map((user) =>{
        return <UserCard key={user.id} item={user}/>
      })
     }
    </Stack>
    </Container>
  )
}
