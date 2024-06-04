import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { Currentuser } = useSelector(state => state.users);

   const Navigate=useNavigate()
  
    
       


  return (
    <>
      <div className='p-3 mx-auto container max-w-lg'>
        <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <form className='flex flex-col gap-4 w-full'>
          <input type='file' hidden accept='image/*' id='file-input' />
          <div className="text-center font-bold bg-sky-500 rounded-full border-2 border-solid w-14 h-14 cursor-pointer m-auto">
            <label htmlFor="file-input" className="text-4xl cursor-pointer">🙎</label>
          </div>
          <input
            defaultValue={Currentuser.username}
            type='text'
            id='username'
            placeholder='Username'
            className='bg-gray-800 rounded-lg p-2'
          />
          <input
            defaultValue={Currentuser.email}
            type='email'
            id='email'
            placeholder='Email'
            className='bg-gray-800 rounded-lg p-2'
          />
          <input
            defaultValue={Currentuser.password}
            type='password'
            id='password'
            placeholder='Password'
            className='bg-gray-800 rounded-lg p-2'
          />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Update
          </button>
        </form>
        <div className='flex justify-between mt-5'>
          <span className='text-red-700 cursor-pointer'>
            Delete Account
          </span>
          <span className='text-red-700 cursor-pointer'>
            Sign Out
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
