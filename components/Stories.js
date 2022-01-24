import React from 'react';
import { useSession } from 'next-auth/react';


export default function Stories() {

  const { data: session, status } = useSession();

  return (
    <div>
      {session && (
        <>
          <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray'>
            <div className=''>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={session.user.image} alt="" />
              <p className='text-xs w-14 truncate text-center'>{session.user.name}</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story2.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story3.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story4.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story1.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story2.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story3.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story4.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story1.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story2.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story3.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story4.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>
          </div>
        </>
      )}



    </div>
  )
}
