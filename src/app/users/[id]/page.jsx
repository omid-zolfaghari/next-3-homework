import { getData } from "@/utils/fetchData";
import { Container, Stack, Typography } from "@mui/material";

export default async function page({params}) {
    const data = await getData(`https://dummyjson.com/users/${params.id}`);
  return (
    <Container sx={{display : "flex", alignItems : "center",justifyContent : "center", height : "500px"}}>
      <Stack direction="column" gap={4} justifyContent= "center" alignItems="center">
        <Typography color="primary" variant="h2">
          {`User id : ${params.id}`}
        </Typography>
      <Typography variant="h3">
        {`Name : ${data.firstName + "" + data.lastName}`}
      </Typography>
      <Typography variant="h4">
        {`Age : ${data.age}`}
      </Typography>
      </Stack>
    </Container>
  )
}
