import React from 'react';

export default function Suggestions() {


    return (
        <div style={{ color: "white" }} className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-white-400'>
                    Suggestions for you
                </h3>
                <button className='text-gray-300'>See All</button>
            </div>

            <div className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full  border p-[2px]' src="https://www.pinpng.com/pngs/m/443-4432971_circular-profile-image-circular-profile-picture-png-transparent.png" alt="" />
                <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm '>Sophie Turner</h2>
                <h3 className="text-xs text-gray-400">Works at Klubhop</h3>
            </div>
            <button className='text-xs text-blue-400'>Follow</button>
            </div>

            <div className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full border p-[2px]' src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann.jpeg" alt="" />
                <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm '>Angela Jolly</h2>
                <h3 className="text-xs text-gray-400">Works at Facebook</h3>
            </div>
            <button className='text-xs text-blue-400'>Follow</button>
            </div>

            <div className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full border p-[2px]' src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" alt="" />
                <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm '>Ram Peri</h2>
                <h3 className="text-xs text-gray-400">Works at Nargeeks</h3>
            </div>
            <button className='text-xs text-blue-400'>Follow</button>
            </div>

            <div className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full border p-[2px]' src="https://lean-analytics.org/wp-content/uploads/2016/09/DMaklin-2016-Profile-Rounded.png" alt="" />
                <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm '>Tomb Raider</h2>
                <h3 className="text-xs text-gray-400">Works at Instagram</h3>
            </div>
            <button className='text-xs text-blue-400'>Follow</button>
            </div>

            <div className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full border p-[2px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIoWKS1RtGVxlOXHK2_ZgzcnD-rcE683DmQ&usqp=CAU" alt="" />
                <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm '>Kylie Anderson</h2>
                <h3 className="text-xs text-gray-400">Works at Google</h3>
            </div>
            <button className='text-xs text-blue-400'>Follow</button>
            </div>
            
        </div>
    )
}
