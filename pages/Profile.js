import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import { BookmarkAltIcon, VideoCameraIcon, ViewGridIcon } from '@heroicons/react/outline';
import Modal from '../components/Modal';
import Reels from '../components/Reels';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';



export default function Profile({ img }) {

    const { data: session } = useSession();
    const [openReel, setOpenReel] = useRecoilState(modalState);

    const onClickReels = () => {
        let reels = document.getElementById("reels")

        reels.style = "none"
    }


    return (
        <>
            <div>
                <Header />


                <Reels />



                <section style={{ width: "100%" }} class="profile_sec">
                    <div class="container">
                        <div style={{ display: "flex", justifyContent: "center" }} class="row align-items-center">
                            <div style={{ display: "flex", width: "90%" }}>
                                <div style={{ width: "35%" }} class="col-sm-4">
                                    <div class="profile_dp" data-toggle="modal" data-target="#exampleModalCenter_dp">
                                        <img src={session?.user?.image} alt="" />
                                    </div>
                                </div>

                                <div style={{ width: "65%" }} class="col-sm-8">
                                    <div class="profile_info_area">
                                        <div class="profile_info_details">
                                            <div class="profile_name"><p>{session?.user?.username}</p></div>
                                            <a href="https://nargeeks.in/klubhop/edit.html" class="edit_prfl">Edit Profile</a>
                                            <div class="setting_btn" data-toggle="modal" data-target="#exampleModalCenter_setting"><ion-icon name="settings"></ion-icon></div>
                                        </div>

                                        <div class="follower_bar">
                                            <p class="post_numbers">1 Post</p>
                                            <div class="followers_no" data-toggle="modal" data-target="#exampleModalCenter_followers">31 Followers</div>
                                            <div class="following_no" data-toggle="modal" data-target="#exampleModalCenter_following">23 Following</div>
                                        </div>

                                        <div class="user_name">
                                            <h3>{session?.user?.name}</h3>
                                            <p class="status_info">About User</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <hr style={{ marginLeft: "10%", width: "80%" }} className='border-gray-500 mt-6' />
                <section>
                    <div className="flex justify-center gap-10">
                        <button className="focus:border-t border-gray-300 text-white py-4 font-semibold flex gap-2 focus:text-gray-400">
                            <ViewGridIcon className='navBtn' />

                            Posts
                        </button>

                        <button className="focus:border-t border-gray-300 text-white py-4 font-semibold flex gap-2 focus:text-gray-400">
                            <BookmarkAltIcon className='navBtn' />
                            Saved
                        </button>

                        <button onClick={onClickReels} className="focus:border-t border-gray-300 text-white py-4 font-semibold flex gap-2 focus:text-gray-400">
                            <VideoCameraIcon className='navBtn' />
                            Reels
                        </button>

                    </div>
                </section>

                <div id='reels'>
                    <div id='postSection' className='postSectionHide mb-5' style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                        <main id="London" className={` grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto ${!session && "!grid-cols-1 !max-w-3xl"}`} style={{ display: "block" }}>

                            <section style={{ display: "flex", width: "75vw" }}>
                                <div style={{ width: "25%" }}>
                                    {/* <div class="khublop_post_item">
                                    <img className="mx-2" style={{ height: "200px", width: "330px", borderRadius: "5px" }} src="/khPost25.jpg" alt="" />
                                </div> */}


                                    {/* <img className="mx-2" style={{ height: "200px", width: "330px", borderRadius: "5px" }} src="https://www.statuslagao.com/whatsapp/videos/funny/funny-status-video-0173.mp4" alt="" /> */}

                                    <video onClick={() => setOpenReel(true)} style={{ height: "100%", width: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px", cursor: "pointer" }}  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-025.mp4" />
                                    </video>
                                </div>



                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-009.mp4" />
                                    </video>
                                </div>



                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-023.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px", cursor: "pointer" }} >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-016.mp4" />
                                    </video>
                                </div>
                            </section>
                        </main>
                    </div>












                    <div id='savedSection' className='savedSectionHide mb-5' style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                        <main id="London" className={` grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto ${!session && "!grid-cols-1 !max-w-3xl"}`} style={{ display: "block" }}>

                            <section style={{ display: "flex", width: "75vw" }}>
                                <div style={{ width: "25%" }}>
                                    <video style={{ height: "100%", width: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-009.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-016.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-025.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-023.mp4" />
                                    </video>
                                </div>
                            </section>

                        </main>
                    </div>







                    <div id='reelSection' className='reelSectionHide mt-2 mb-2' style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                        <main id="London" className={` grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto ${!session && "!grid-cols-1 !max-w-3xl"}`} style={{ display: "block" }}>

                            <section style={{ display: "flex", width: "75vw" }}>
                                <div style={{ width: "25%" }}>
                                    <video style={{ height: "100%", width: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-025.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-009.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-023.mp4" />
                                    </video>
                                </div>

                                <div style={{ width: "25%" }} className='ml-4'>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "400px", borderRadius: "20px" }} >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-016.mp4" />
                                    </video>
                                </div>
                            </section>

                        </main>
                    </div>
                </div>












                <div class="body_fotter_sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="body_footer">
                                    <div class="ref_pages">
                                        <a href="" class="ref_liks">about</a>
                                        <a href="" class="ref_liks">help</a>
                                        <a href="" class="ref_liks">press</a>
                                        <a href="" class="ref_liks">API</a>
                                        <a href="" class="ref_liks">jobs</a>
                                        <a href="" class="ref_liks">privacy</a>
                                        <a href="" class="ref_liks">terms</a>
                                        <a href="" class="ref_liks">location</a>
                                        <a href="" class="ref_liks">top accounts</a>
                                        <a href="" class="ref_liks">hashtags</a>
                                        <a href="" class="ref_liks">language</a>
                                    </div>
                                    <p class="copy_rights">© 2021 KLUBHOP FROM META</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








                {/* <div class="modal fade" id="exampleModalCenter_setting" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered  " role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="setting_options">
                                    <ul>
                                        <li><a href="">change password</a></li>
                                        <li><a href="">name tag</a></li>
                                        <li><a href="">Apps and Websites</a></li>
                                        <li><a href="">Notifications</a></li>
                                        <li><a href="">Privacy and Security</a></li>
                                        <li><a href="">Login Activity</a></li>
                                        <li><a href="">Emails from klubhop</a></li>
                                        <li><a href="">Report a Problem</a></li>
                                        <li><a href="">Log Out</a></li>
                                        <li><a href="" type="button" data-dismiss="modal" aria-label="Close">close</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalCenter_followers" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Followers</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><ion-icon name="close-outline"></ion-icon></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="follow_area">
                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>

                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>

                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>

                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>

                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>

                                    <div class="suggested_profl_item">
                                        <div class="suggested_profl_info">
                                            <div class="suggested_profl_img">
                                                <img src="images/user123.png" alt="" />
                                            </div>
                                            <div class="suggested_profl_content">
                                                <a href="">jannabisarkar21</a>
                                                <a href="" class="follow_add">follow</a>
                                                <p>Followed by bidisha6109</p>
                                            </div>
                                        </div>
                                        <a href="" class="btn remove">remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="modal fade" id="exampleModalCenter_dp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Change Profile Photo</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><ion-icon name="close-outline"></ion-icon></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="dp_changes">
                                    <ul>
                                        <li><a href="" style={{ color: "green" }}>upload photo</a></li>
                                        <li><a href="" style={{ color: "red" }}>remove current photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                 <div class="modal fade" id="exampleModalCenter_following" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Following</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><ion-icon name="close-outline"></ion-icon></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="following_area">

                                    <div class="following_menu">
                                        <button class="following_menu_item active_menu" value="people">people</button>
                                        <button class="following_menu_item" value="Hashtags">Hashtags</button>
                                    </div>

                                    <div class="following_content">
                                        <div class="people_content">

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                        </div>

                                        <div class="Hashtags_content" style={{ display: "none" }}>

                                            <div class="suggested_profl_item">
                                                <div class="suggested_profl_info">
                                                    <div class="suggested_profl_img">
                                                        <img src="images/user123.png" alt="" />
                                                    </div>
                                                    <div class="suggested_profl_content">
                                                        <a href="">jannabisarkar21</a>
                                                        <p>Followed by bidisha6109</p>
                                                    </div>
                                                </div>
                                                <a href="" class="btn follow">follow</a>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}
