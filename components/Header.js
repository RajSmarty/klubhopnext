import React from 'react';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    StatusOnlineIcon,
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
            <div className='shadow-sm bg-dark sticky top-0 z-50'>
                <div style={{ background: "black", borderBottom: "1.8px solid #ff0a68" }}>
                    {/* Left Starts from here */}
                    <div style={{ height: "100%" }} className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
                        <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-28 cursor-pointer'>
                            <img className='animate-pulse' src="/logo.jpg" layout="fill" objectfit="contain" alt="" />
                        </div>

                        <div onClick={() => router.push('/')} className='relative w-28 lg:hidden flex-shrink-0'>
                            <img src="/logo.jpg" layout="fill" objectfit="contain" alt="" />
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
                            <HomeIcon style={{ filter: "invert(1)" }} onClick={() => router.push('/')} className='navBtn invertIcon' />
                            <MenuIcon style={{ filter: "invert(1)" }} className='h-6 md:hidden cursor-pointer invertIcon' />

                            {session ? (
                                <>
                                    <div className='relative navBtn mb-1'>
                                        <PaperAirplaneIcon style={{ filter: "invert(1)" }} className='navBtn rotate-45 invertIcon' />
                                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center  text-white'>3</div>
                                    </div>

                                    <PlusCircleIcon style={{ filter: "invert(1)" }}
                                        onClick={() => setOpen(true)}
                                        className='navBtn invertIcon' />
                                    <StatusOnlineIcon style={{ filter: "invert(1)" }} className='navBtn invertIcon hover:animate-ping' />



                                    <div className='mt-2'>


                                        <ul className="dropdown">
                                            <li><a><img onClick={() => router.push('/Profile')} src={session?.user?.image} alt="" className='h-10 w-10 rounded-full cursor-pointer skeleton' /></a>
                                                <ul>
                                                    <li><a style={{ display: "flex" }} >
                                                        <img onClick={() => router.push('/Profile')} className='h-5 mt-2' style={{ filter: "contrast(100%)" }} src={session?.user?.image} />
                                                        <p onClick={() => router.push('/Profile')} className="ml-2">Profile</p></a>
                                                    </li>

                                                    <li><a style={{ display: "flex" }} ><img style={{ filter: "invert(1)" }} onClick={() => router.push('/Profile')} className='h-5 mt-2' src="https://img.icons8.com/small/16/000000/filled-bookmark-ribbon.png" />

                                                        <p onClick={() => router.push('/Profile')} className="ml-2">Saved</p></a></li>


                                                    <li><a style={{ display: "flex" }} ><img onClick={() => router.push('/Profile')} className='h-5 mt-2' src="https://img.icons8.com/flat-round/16/000000/settings--v1.png" />
                                                        <p onClick={() => router.push('/Profile')} className="ml-2">Settings</p></a></li>

                                                    <li><a style={{ display: "flex" }} ><img onClick={() => router.push('/Profile')} className='h-5 mt-2' src="https://img.icons8.com/color-glass/16/000000/swap.png" />
                                                        <p onClick={() => router.push('/Profile')} className="ml-1">Switch accounts</p></a></li>


                                                    <hr style={{ border: "0.1px dashed #4d4c4c" }} />
                                                    <li><a onClick={signOut} style={{ fontWeight: "bold", border: "1px solid #303030" }}>Logout</a></li>
                                                </ul>
                                            </li>
                                        </ul>


                                    </div>
                                </>
                            ) : (
                                <button style={{ color: "white" }} onClick={signIn}>Create New Account</button>
                            )}
                        </div>
                        {/* Right Ends here */}

                    </div>
                </div>
            </div>
        </>
    )
}
