import UserForm from "@/components/UserForm"
import UserList from "@/components/UserList"
import { getData } from "@/utils/fetchData"
import { Container } from "@mui/material"

export default async function page() {

    const usersData = await getData("http://localhost:3000/api/users")

  return (
    <Container maxWidth={500} sx={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height:"500", marginY : "4rem"}}>
      <UserForm/>
      <UserList users={usersData}/>
    </Container>
  )
}
