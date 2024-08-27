import { getData } from "@/utils/fetchData";
import { Container, Stack, Typography } from "@mui/material";
import { unstable_noStore } from "next/cache";

export async function generateMetadata({params}) {
  return{
    title : `Post - ${params.id}`,
    description : "Post of dummyjson"
  }
}

export default async function page({params}) {
  unstable_noStore()
  const data = await getData(`http://localhost:3000/api/posts/${params.id}`);

  return (
    <Container sx={{display : "flex", alignItems : "center", height : "500px"}}>
      <Stack direction="column" gap={4} justifyContent= "center" alignItems="center">
        <Typography color="primary" variant="h2">
          {`Post id : ${params.id}`}
        </Typography>
      <Typography variant="h3">
        {data.title}
      </Typography>
      <Typography variant="body1">
        {data.body}
      </Typography>
      </Stack>
    </Container>
  )
}
