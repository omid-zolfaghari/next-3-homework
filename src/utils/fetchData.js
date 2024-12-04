"use server"

export const getData = async (url)=>{
  const res = await fetch(url, {next : {tags : ["user"]}, cache : "no-store"});
  const data = await res.json();
  return data
}

