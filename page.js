"use client"
import React, { useState } from 'react'


const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const [main, setMain] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();

    setMain([...main, {title,desc}])

    setTitle("");
    setDesc("");
    console.log(main)

  }

  const deleteHandler = (i) => {
    let copytask = [...main]
    copytask.splice(i,1)
    setMain(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(main.length>0){
  renderTask = main.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text- font-semibold'>{t.desc}</h6>
    </div>
    <button
    onClick={()=>{
      deleteHandler(i)
    }}
    className='bg-red-500 text-white rounded font-bold'>Delete</button>
      </li>
    ) 
  })
}


  return (
    <>
      <h1 className='bg-purple-400 text-white first-letter p-5 font-bold text-center text-4xl'>Listify</h1>
    
      <form onSubmit={submitHandler}> 
        <input type='text' className= 'text-gray-800 text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        placeholder='Input Your To-Do'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input type='text' className='text-gray-800 text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        placeholder='Describe Your Task'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />
        <button className='bg-stone-800 text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-3 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page