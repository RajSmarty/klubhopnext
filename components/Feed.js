import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';



export default function Feed() {

    const { data: session, status } = useSession();

    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
            <main className={` grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
                <section className='col-span-2'>
                    <Stories />
                    <Posts />
                </section>

                {session && (

                    <section className='hidden xl:inline-grid md:col-span-1'>
                        <div className='fixed top-20'>
                            <MiniProfile />
                            <Suggestions />
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}
