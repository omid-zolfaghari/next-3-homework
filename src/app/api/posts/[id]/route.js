import { postData } from "../route";

export async function GET(req, {params}) {
    const data = postData.find(post => post.id === params.id)
    return Response.json(data)
}

export async function PATCH(req, {params}) {
    const {title, body} = await req.json();
    const index = postData.findIndex(post => post.id === params.id);
    postData[index].title = title;
    postData[index].body = body;
    return Response.json(postData[index])
}


export async function DELETE(req, {params}) {
    const index = postData.findIndex(post => post.id === params.id);
    const deleted = postData[index]
    postData.splice(index, 1);
    return Response.json(deleted)
}