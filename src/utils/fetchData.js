export const getData = async (url)=>{
  const res = await fetch(url, {next : {tags : ["user"]}});
  const data = await res.json();
  return data
}

