import React, { Fragment, useRef, useState } from 'react';
import { Snapshot, useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from "@headlessui/react"
import { CameraIcon } from '@heroicons/react/outline';
import { db, storage } from "../firebase"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "@firebase/firestore"
import { useSession } from 'next-auth/react';
import { ref, getDownloadURL, uploadString } from "@firebase/storage";


export default function Reels() {

    const { data: session } = useSession();
    const [openReel, setOpenReel] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);



    const uploadPost = async () => {
        if (loading) return;

        setLoading(true);

        // 1) Create a POST and add it to Firestore
        // 2) Get the POST ID for the newly created post
        // 3) Upload the image to Firebase Storage with the POST ID
        // 4) Get a download URL from the Firebase Storage and Update to Original Post with Image

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        });

        console.log("New Doc. Added", docRef.id);

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db, 'posts', docRef.id), {
                image: downloadURL
            });
        });
        setOpenReel(false);
        setLoading(false);
        setSelectedFile(null);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent => {
            setSelectedFile(readerEvent.target.result);
        });
    };

    return (
        <Transition.Root show={openReel} as={Fragment}>
            <Dialog as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpenReel}>
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>

                            <div >
                                <div style={{height:"550px", marginTop:"10%"}}>
                                    <video style={{ height: "100%" }} className='object-cover w-full' alt="video" style={{ height: "100%", borderRadius: "18px" }} controls  >
                                        <source src="https://www.statuslagao.com/whatsapp/videos/trending/trending-status-video-025.mp4" />
                                    </video>

                                </div>

                                
                            </div>
                            

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>

        </Transition.Root>
    )
}
