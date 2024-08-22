import { userData } from "../route";

export async function GET(req, {params}) {
    const data = userData.find(user => user.id === params.id)
    return Response.json(data)
}

export async function PATCH(req, {params}) {
    const {firstName, lastName, age, email} = await req.json();
    const index = userData.findIndex(user => user.id === params.id);
    userData[index].firstName = firstName;
    userData[index].lastName = lastName;
    userData[index].age = age;
    userData[index].email = email;

    return Response.json(userData[index])
}


export async function DELETE(req, {params}) {
    const index = userData.findIndex(user => user.id === params.id);
    const deleted = userData[index]
    userData.splice(index, 1);
    return Response.json(deleted)
}