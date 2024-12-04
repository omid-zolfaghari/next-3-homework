import UserCard from "@/components/UserCard";
import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";
import { unstable_noStore } from "next/cache";
import dynamic from "next/dynamic";

export async function generateMetadata() {
  return{
    title : "Users",
    description : "Users of dummyjson"
  }
}

const Ucard = dynamic(()=>import("../../components/UserCard"), {
  loading : ()=> <p>Loading please wait...</p>
})

export default async function page() {
  unstable_noStore()

  const data = await getData("http://localhost:3000/api/users");

  return (
    <Container>
      <Box marginBottom={4} sx={{textAlign : "center"}}>
        <Typography variant="h2">
          USERS
        </Typography>
      </Box>
    <Stack justifyContent ="center" alignItems="center" gap= "2rem" flexWrap="wrap" direction="row">
     {
      data.map((user) =>{
        return <Ucard key={user.id} item={user}/>
      })
     }
    </Stack>
    </Container>
  )
}
