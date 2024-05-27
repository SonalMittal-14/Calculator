import React, { useState } from 'react'
import { IoBackspaceOutline } from "react-icons/io5";
import "./Button.css"
import leaf1 from "../Images/leaf_01.png"
import leaf2 from "../Images/leaf_02.png"
import leaf3 from "../Images/leaf_03.png"
import leaf4 from "../Images/leaf_04.png"
import bg from "../Images/bg.jpg"
import girl from "../Images/girl.png"
import trees from "../Images/trees.png"
 



const Buttons = () => {
    const [value,setvalue] = useState("")
  return ( 
    <section>

        <div class="leaves">
            <div class="set">
                <div><img src={leaf1}/></div>
                <div><img src={leaf2}/></div>
                <div><img src={leaf3}/></div>
                <div><img src={leaf4}/></div>
                <div><img src={leaf1}/></div>
                <div><img src={leaf2}/></div>
                <div><img src={leaf3}/></div>
                <div><img src={leaf4}/></div>
                
            </div>
        </div>
        <img src={bg} class="bg"/>
        <img src={girl} class="girl"/>
        <img src={trees} class="trees"/>




        <div className='flex items-center justify-center min-h-screen  z-10 '  >

        

            <form action='' className=' login px-6 py-8 rounded-3xl'>

                <h1 className='text-6xl text-red-800 text-center font-semibold tracking-wider'>Calculator</h1>

                <div className='w-full '>
                    <input className='w-full rounded-xl py-4 px-2 text-end focus:outline-0 text-3xl bg-white text-red-800 ' readOnly type='text' value={value}/>
                </div>
                <div className='flex  gap-x-10'>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="AC" onClick={e =>setvalue("")}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="%" onClick={e=>setvalue(value+e.target.value)}/>
                    <div className='w-16 bg-red-800 text-white py-4 rounded-full  flex justify-center text-3xl ' onClick={e =>setvalue(value.slice(0,-1))}> 
                    <IoBackspaceOutline/>
                    </div>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="/" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl ' type='button' value="7" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="8" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="9" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="*" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="4" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="5" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="6" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="-" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="1" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="2" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="3" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="+" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="00" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="0" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-white py-4 rounded-full text-2xl' type='button' value="." onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-red-800 text-2xl text-white py-4 rounded-full' type='button' value="=" onClick={e=>setvalue(eval(value))}/>
                </div>
            </form>
        </div>
    </section>
  );
};

export default Buttons