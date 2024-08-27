import RecipeForm from "@/components/RecipeForm"
import RecipeList from "@/components/RecipeList"
import { getData } from "@/utils/fetchData"
import { Container } from "@mui/material"


async function page() {
    const recipesData = await getData("http://localhost:3000/api/recipes")

    return (
      <Container maxWidth={500} sx={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height:"500", marginY : "4rem"}}>
        <RecipeForm/>
        <RecipeList recipes={recipesData}/>
      </Container>
    )
}

export default page
