import React from 'react';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


export default function Header() {


    const { data: session, status } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <>
            <div className='shadow-sm border-b bg-dark sticky top-0 z-50'>
                {/* Left Starts from here */}
                <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
                    <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                        <img src="/logo.png" layout="fill" objectfit="contain" alt="" />
                    </div>

                    <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0'>
                        <img src="/logo.png" layout="fill" objectfit="contain" alt="" />
                    </div>
                    {/* Left Ends here */}



                    {/* Middle Starts from here */}

                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input type="text" style={{ border: "1px solid gray" }} className="bg-gray-50 block h-full w-full pl-10 sm:text-sm border-gray rounded-md focus:ring-black focus:border-black" placeholder='Search' />
                    </div>
                    {/* Middle Ends here */}



                    {/* Right Starts from here */}
                    <div className='flex items-center justify-end space-x-4'>
                        <HomeIcon onClick={() => router.push('/')} style={{ filter: "invert(1)" }} className='navBtn' />
                        <MenuIcon style={{ filter: "invert(1)" }} className='h-6 md:hidden cursor-pointer' />

                        {session ? (
                            <>
                                <div className='relative navBtn'>
                                    <PaperAirplaneIcon style={{ filter: "invert(1)" }} className='navBtn rotate-45' />
                                    <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                                </div>

                                <PlusCircleIcon
                                    onClick={() => setOpen(true)}
                                    style={{ filter: "invert(1)" }} className='navBtn' />

                                <UserGroupIcon style={{ filter: "invert(1)" }} className='navBtn' />
                                <HeartIcon style={{ filter: "invert(1)" }} className='navBtn' />

                                <div>
                                    <img onClick={signOut} src={session?.user?.image} alt="" className='h-10 w-10 rounded-full cursor-pointer ' />
                                </div>
                            </>
                        ) : (
                            <button style={{ color: "white" }} onClick={signIn}>Sign In</button>
                        )}
                    </div>
                    {/* Right Ends here */}

                </div>
            </div>
        </>
    )
}
