import { unstable_cache, unstable_noStore } from "next/cache";
import { v4 as uuid } from "uuid";

export const userData = [
    {
        id : "1",
        firstName : "Emily",
        lastName : "Johnson",
        email : "emily.johnson@x.dummyjson.com",
        age : "23"
    },
    {
        id : "2",
        firstName : "Micheal",
        lastName : "Williams",
        email : "michael.williams@x.dummyjson.com",
        age : "18"
    },
    {
        id : "3",
        firstName : "Sophia",
        lastName : "Brown",
        email : "sophia.brown@x.dummyjson.com",
        age : "45"
    },
    {
        id : "4",
        firstName : "James",
        lastName : "Davis",
        email : "james.davis@x.dummyjson.com",
        age : "12"
    },
    {
        id : "5",
        firstName : "Emma",
        lastName : "Miller",
        email : "emma.miller@x.dummyjson.com",
        age : "64"
    },
    {
        id : "6",
        firstName : "Olivia",
        lastName : "Wilson",
        email : "olivia.wilson@x.dummyjson.com",
        age : "34"
    }
]

export async function GET(req) {
    unstable_noStore()
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("q")

    if(query){
        const filteredData = userData.filter(user => user.firstName.toLowerCase().includes(query)) || userData.filter(user => user.lastName.toLowerCase().includes(query))
        return Response.json(filteredData)
    }else{
        return Response.json(userData)
    }
}

export async function POST(req) {
    const body = await req.json()
    userData.push({...body, id : uuid()})
    return Response.json(userData)
}