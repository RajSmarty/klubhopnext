import React from 'react';
import { signOut, useSession } from 'next-auth/react';


export default function MiniProfile() {

    const { data: session, status } = useSession();

    return (
        <div style={{ color: "white" }} className='flex items-center justify-between mt-10 ml-10 '>
            <img className='w-16 h-16 rounded-full border-blue-500 border p-[2px] adjustImg ' src={session?.user?.image} alt="" />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-300'>Welcome to Klubhop</h3>
            </div>

            <button onClick={signOut} className='text-blue-500 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}
