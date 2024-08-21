export const userData = [
    {
        id : "1",
        name : "Classic Margherita Pizza",
        ingredients : [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
            ],
        instructions : "emily.johnson@x.dummyjson.com",
        image : "23"
    },
    {
        id : "2",
        name : "Micheal",
        ingredients : "Williams",
        instructions : "michael.williams@x.dummyjson.com",
        image : "18"
    },
    {
        id : "3",
        name : "Sophia",
        ingredients : "Brown",
        instructions : "sophia.brown@x.dummyjson.com",
        image : "45"
    },
    {
        id : "4",
        name : "James",
        ingredients : "Davis",
        instructions : "james.davis@x.dummyjson.com",
        image : "12"
    },
    {
        id : "5",
        name : "Emma",
        ingredients : "Miller",
        instructions : "emma.miller@x.dummyjson.com",
        image : "64"
    },
    {
        id : "6",
        name : "Olivia",
        ingredients : "Wilson",
        instructions : "olivia.wilson@x.dummyjson.com",
        image : "34"
    }
]

export async function GET(req) {
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
    userData.push(body)
    return Response.json(userData)
}