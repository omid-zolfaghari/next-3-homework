import { v4 as uuid } from "uuid";


export const postData = [
    {
        id : "1",
        title : "His mother had always taught him",
        body : "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId : 121,

    },
    {
        id : "2",
        title : "He was an expert but not in a discipline",
        body : "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        userId : 91,

    },
    {
        id : "3",
        title : "Dave watched as the forest burned up on the hill.",
        body : "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        userId : 16,

    },
    {
        id : "4",
        title : "All he wanted was a candy bar.",
        body : "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
        userId : 47,

    },
    {
        id : "5",
        title : "Hopes and dreams were dashed that day.",
        body : "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
        userId : 131,

    },
    {
        id : "6",
        title : "Dave wasn't exactly sure how he had ended up",
        body : "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
        userId : 98,

    }
]

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("q")

    if(query){
        const filteredData = postData.filter(post => post.firstName.toLowerCase().includes(query))
        return Response.json(filteredData)
    }else{
        return Response.json(postData)
    }
}

export async function POST(req) {
    const body = await req.json()
    postData.push({...body, id:uuid()})
    return Response.json(postData)
}