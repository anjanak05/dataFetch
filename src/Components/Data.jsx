import React, { useState } from 'react'

const Data = () => {
const [text, setText]= useState([])
    const dataPost= async()=>{
        try{
let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
res = await res.json()
setText(res)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
<button onClick={dataPost}>Fetch Posts</button>
{text.map((e)=>(
    <h1>{e.title}</h1>
))}
    </div> 
  )
}

export default Data