import React from 'react'
import {Link} from 'react-router-dom'

export default function SignIn() {

    const handleSubmit = (e) => {}
    const handleChange = (e) => {}
  return (
    <div className='bg-slate-50'>
        <div className="px-5 max-w-md py-5 md:py-20 mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-8">Sign In</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button  className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
        
      </form>
      
      
    </div>
    </div>
    
  )
}
