import React, { useRef ,useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {RegisterController} from '../stores/AuthSlice'
import Error from './Error';

const Register = () => {

     const Email=useRef();
     const Name=useRef();
     const pass=useRef();
     const ConfPass=useRef();
    const Dispatch=useDispatch();
     let Navigate=useNavigate()
     let {isError,isloading,message}= useSelector(state=>state.users)


     async function SubmitHandle(e)
     {
         e.preventDefault();
         let email=Email.current.value;
         let username=Name.current.value;
         let password=pass.current.value;
         let confpass=ConfPass.current.value;
   
         let data={
            email,username,password
         }


          if(password!=confpass)
            {
                toast.error("Password Did not Matched! ")
                return;
            } 

           
               
               const abc=await Dispatch(RegisterController(data))
            
               if(abc.payload.status==="sucess")
                {
                    Navigate("/login")
                }

                  Email.current.value=""
                  Name.current.value=""
                  pass.current.value=""
                  ConfPass.current.value=""
                   
   
     }

     
    

  return (
    <>
    {isloading &&  <Error/>   }
    <form  className='container flex flex-col border-2 md:w-2/3 bg-slate-800 mt-6 m-auto p-6 rounded-xl gap-3 h-auto font-bold text-normal lg:w-2/5' >
        <Toaster position="top-center" reverseOrder={false} />
    <div className=' text-center font-extrabold text-2xl text-green-800 underline '>Register</div>
    <div className='flex flex-col gap-2 ' >
        <label>UserName</label>
        <input type='text' placeholder=' Enter UserName'  className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900' ref={Name}/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Email</label>
        <input type='email' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900' ref={Email}/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Password</label>
        <input type='password' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3  rounded-lg  border-2 border-solid border-cyan-900' ref={pass}/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Confirm Password</label>
        <input type='password' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900' ref={ConfPass}/>
    </div>
  
   
    <div className='flex flex-col gap-2 items-end'>
        <button className=' border-2 bg-sky-800 p-1 rounded-lg px-3 ' onClick={SubmitHandle}>Register</button>
    </div>
</form>

</>
  )
}

export default Register