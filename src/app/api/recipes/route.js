import { v4 as uuid } from "uuid";

export const recipeData = [
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
        instructions : [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot."
            ],
        userID : 166
    },
    {
        id : "2",
        name : "Vegetarian Stir-Fry",
        ingredients : [
            "Tofu, cubed",
            "Broccoli florets",
            "Carrots, sliced",
            "Bell peppers, sliced",
            "Soy sauce",
            "Ginger, minced",
            "Garlic, minced",
            "Sesame oil",
            "Cooked rice for serving"
            ],
        instructions : [
            "In a wok, heat sesame oil over medium-high heat.",
            "Add minced ginger and garlic, sauté until fragrant.",
            "Add cubed tofu and stir-fry until golden brown.",
            "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
            "Pour soy sauce over the stir-fry and toss to combine.",
            "Serve over cooked rice."
            ],
        userId: 143
    },
    {
        id : "3",
        name : "Chocolate Chip Cookies",
        ingredients : [
            "All-purpose flour",
            "Butter, softened",
            "Brown sugar",
            "White sugar",
            "Eggs",
            "Vanilla extract",
            "Baking soda",
            "Salt",
            "Chocolate chips"
            ],
        instructions : [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, cream together softened butter, brown sugar, and white sugar.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
            "Fold in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes or until edges are golden brown.",
            "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
            ],
        userId: 34
    },
    {
        id : "4",
        name : "Chicken Alfredo Pasta",
        ingredients : [
            "Fettuccine pasta",
            "Chicken breast, sliced",
            "Heavy cream",
            "Parmesan cheese, grated",
            "Garlic, minced",
            "Butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
            ],
        instructions : [
            "Cook fettuccine pasta according to package instructions.",
            "In a pan, sauté sliced chicken in butter until fully cooked.",
            "Add minced garlic and cook until fragrant.",
            "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
            "Season with salt and pepper to taste.",
            "Combine the Alfredo sauce with cooked pasta.",
            "Garnish with fresh parsley before serving."
            ],
        userId: 136
    },
    {
        id: 5,
        name: "Mango Salsa Chicken",
        ingredients: [
"Chicken thighs",
"Mango, diced",
"Red onion, finely chopped",
"Cilantro, chopped",
"Lime juice",
"Jalapeño, minced",
"Salt and pepper to taste",
"Cooked rice for serving"
],
       instructions: [
"Season chicken thighs with salt and pepper.",
"Grill or bake chicken until fully cooked.",
"In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
"Dice the cooked chicken and mix it with the mango salsa.",
"Serve over cooked rice."
],
        userId : 97
    },
    {
        id : "6",
        name : "Quinoa Salad with Avocado",
        ingredients : [
            "Quinoa, cooked",
            "Avocado, diced",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red bell pepper, diced",
            "Feta cheese, crumbled",
            "Lemon vinaigrette dressing",
            "Salt and pepper to taste"
            ],
        instructions : [
            "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
            "Drizzle with lemon vinaigrette dressing and toss to combine.",
            "Season with salt and pepper to taste.",
            "Chill in the refrigerator before serving."
            ],
        userId : 37
    }
]

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("q")

    if(query){
        const filteredData = recipeData.filter(user => user.name.toLowerCase().includes(query))
        return Response.json(filteredData)
    }else{
        return Response.json(recipeData)
    }
}

export async function POST(req) {
    const body = await req.json()
    recipeData.push({...body, id: uuid()})
    return Response.json(recipeData)
}