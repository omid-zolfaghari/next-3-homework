import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import { getData } from "@/utils/fetchData"
import { Container } from "@mui/material"


async function page() {
    const postsData = await getData("http://localhost:3000/api/posts")

    return (
      <Container maxWidth={500} sx={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height:"500", marginY : "4rem"}}>
        <PostForm/>
        <PostList posts={postsData}/>
      </Container>
    )
}

export default page
