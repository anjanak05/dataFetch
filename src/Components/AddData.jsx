import React from 'react'
import { useState } from 'react'

const AddData = ({handleAdd}) => {
    const [word, setWord] = useState("")
  return (
    <div>
        <input placeholder='Add Data' onChange={(e)=>setWord(e.target.value)}></input>
        <button onClick={()=>handleAdd(word)}>ADD</button>
    </div>
  )
}

export default AddData