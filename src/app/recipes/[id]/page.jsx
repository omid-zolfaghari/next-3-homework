import { getData } from "@/utils/fetchData";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export async function generateMetadata({params}) {
  return{
    title : `Recipe - ${params.id}`,
    description : "Recipe of dummyjson"
  }
}

export default async function page({params}) {
    const data = await getData(`http://localhost:3000/api/recipes/${params.id}`);
  return (
    <Container sx={{marginY : "8rem",display : "flex", alignItems : "center",justifyContent : "center", height : "500px"}}>
    <Stack direction="column" gap={4} justifyContent= "center" alignItems="center">
      <Typography color="primary" variant="h2">
        {`Recipe id : ${params.id}`}
      </Typography>
    <Typography variant="h3">
      {data.name}
    </Typography>
    <Typography variant="body1">
      {`ingredients : ${data.ingredients}`}
    </Typography>
    <Typography variant="body1">
      {`instructions : ${data.instructions}`}
    </Typography>
    <Box>
   <Image style={{borderRadius : "10px"}} alt="food" width={350} height={250} src={data.image} />
    </Box>
    </Stack>
  </Container>
  )
}
