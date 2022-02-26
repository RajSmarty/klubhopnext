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
              <p className='text-xs w-14 truncate text-center'>Steven J. Wolfe</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story4.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Evelyn E. Smith</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/736x/4b/16/f6/4b16f6b8ca96e4e8ac2ec0e7cc3c6dfa.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Ashley B. Coleman</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzCGvhTfBde2LGY5t1S_ZiUoVKCt_ISw_79V2D8Wk-mkbY5iBzD_YQMdYrYZ1BvybMUM&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Cynthia</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/236x/5e/59/8f/5e598fefca9ccb77e687bd0fbcc22367.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Geraldine J. Albino</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Robert L. Hembree</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://images.squarespace-cdn.com/content/v1/54cc8225e4b0e012acea4aa5/1542079393283-5AUTUF2Z7KDBEJI4G74X/Megan+round+profile+pic.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Marion A. Beyer</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Joseph R. Deforge</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/originals/bd/4b/b7/bd4bb7940c8a51df3ad4dae972ea3482.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Michelle J. Hartman</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Karen Wilson</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQS9kHPz8_G0K4ExYiRi8vvtnpwvbj1TE2E3fL9o341EPhlAI5V7MKIT_N0iBMS7OlTk&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Rebecca V. Stewart</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://png.pngitem.com/pimgs/s/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Daniel K. Dun</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4xspc9f41kKe_0fTH0llFyjJmXDxzcpTUDC_Ya53RgREhw9G6aNiwI9FfPqykieYL50&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Paul Cha Morrell</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZI6q10WVRlcsEoeQ-Zfx-ZjVTKk70LwwEUs1wIbtY01-CzVZmghuzRUo-rHbCSXwldw&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Jonathan M. Robinson</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://images.squarespace-cdn.com/content/v1/59ce4495017db2fe7ba86a27/1567534550701-T6ULG3NMVOXA0TUVPMVX/3-insta+profile+round.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Kenneth T. Briggs</p>
            </div>



            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story2.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>John Wick</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story3.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Steven J. Wolfe</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="/story4.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Evelyn E. Smith</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/736x/4b/16/f6/4b16f6b8ca96e4e8ac2ec0e7cc3c6dfa.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Ashley B. Coleman</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzCGvhTfBde2LGY5t1S_ZiUoVKCt_ISw_79V2D8Wk-mkbY5iBzD_YQMdYrYZ1BvybMUM&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Cynthia</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/236x/5e/59/8f/5e598fefca9ccb77e687bd0fbcc22367.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Geraldine J. Albino</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Robert L. Hembree</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://images.squarespace-cdn.com/content/v1/54cc8225e4b0e012acea4aa5/1542079393283-5AUTUF2Z7KDBEJI4G74X/Megan+round+profile+pic.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Marion A. Beyer</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Joseph R. Deforge</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://i.pinimg.com/originals/bd/4b/b7/bd4bb7940c8a51df3ad4dae972ea3482.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Michelle J. Hartman</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg" alt="" />
              <p className='text-xs w-14 truncate text-center'>Karen Wilson</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQS9kHPz8_G0K4ExYiRi8vvtnpwvbj1TE2E3fL9o341EPhlAI5V7MKIT_N0iBMS7OlTk&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Rebecca V. Stewart</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://png.pngitem.com/pimgs/s/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Daniel K. Dun</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4xspc9f41kKe_0fTH0llFyjJmXDxzcpTUDC_Ya53RgREhw9G6aNiwI9FfPqykieYL50&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Paul Cha Morrell</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZI6q10WVRlcsEoeQ-Zfx-ZjVTKk70LwwEUs1wIbtY01-CzVZmghuzRUo-rHbCSXwldw&usqp=CAU" alt="" />
              <p className='text-xs w-14 truncate text-center'>Jonathan M. Robinson</p>
            </div>

            <div className='mx-4'>
              <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src="https://images.squarespace-cdn.com/content/v1/59ce4495017db2fe7ba86a27/1567534550701-T6ULG3NMVOXA0TUVPMVX/3-insta+profile+round.png" alt="" />
              <p className='text-xs w-14 truncate text-center'>Kenneth T. Briggs</p>
            </div>


          </div>
        </>
      )}



    </div>
  )
}
