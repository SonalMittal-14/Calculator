import React, { useState } from 'react'
import { IoBackspaceOutline } from "react-icons/io5";
import { FaDivide } from "react-icons/fa6";


const Buttons = () => {
    const [value,setvalue] = useState("")
  return ( 
    <div >
        <div className='flex items-center justify-center min-h-screen border border-2 ' >
            <form action='' className='space-y-4 bg-black px-6 py-8 rounded-3xl'>
                <div className='w-full'>
                    <input className='w-full  py-2 px-2 text-end focus:outline-0 text-xl bg-black text-white ' readOnly type='text' value={value}/>
                </div>
                <div className='flex  gap-2 '>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="AC"/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="%" onClick={e=>setvalue(value+e.target.value)}/>
                    <div className='w-16 bg-gray-500 text-white py-4 rounded-full  flex justify-center text-3xl '>
                    <IoBackspaceOutline/>
                    </div>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="/" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-2'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl ' type='button' value="7" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="8" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="9" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="*" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-2'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="4" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="5" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="6" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="-" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-2'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="1" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="2" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="3" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="+" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-2'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="00" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="0" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="." onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-blue-400 text-2xl text-white py-4 rounded-full' type='button' value="="/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Buttons