"use server"

import { revalidateTag } from "next/cache"

export async function add(url,harchi) {
    await fetch(url, {method:"POST", body: JSON.stringify(harchi)});
    revalidateTag("user")
}


export async function edit(url, harchi) {
    await fetch(url, {method:"PATCH", body : JSON.stringify(harchi)})
    revalidateTag("user")
}

export async function deleteSome(url) {
    await fetch(url, {method: "DELETE"});
    revalidateTag("user")
}