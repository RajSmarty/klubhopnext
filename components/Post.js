import React, { useEffect, useState } from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
} from "@firebase/firestore"
import { db } from "../firebase"
import Moment from "react-moment"


export default function Post({ id, username, userImg, img, caption }) {

    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);




    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setComments(snapshot.docs);
                }
            ),
        [db, id]
    );

    useEffect(
        () =>
            onSnapshot(
                collection(db, 'posts', id, 'likes'),
                snapshot => {
                    setLikes(snapshot.docs);
                }
            ),
        [db, id]
    );

    useEffect(
        () =>
            setHasLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
        } else {

            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username,
            });
        }
    };

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comment'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timsestamp: serverTimestamp(),
        });
    }

    console.log(comments);


    return (
        <div className='bg-white my-7 border rounded-sm'>
            <div className='flex items-center p-5'>
                <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-1' alt="" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {<>

                {/* <img src={img} style={{ height: "100%" }} className='object-cover w-full skeleton'  /> */}
                

                <video style={{height: "450px", width:"100%"}} className='w-full' alt="video"  controls loop >
                    <source  src={img} />
                </video>
            </>}

            {/* Buttons */}
            {session && (

                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4'>
                        {
                            hasLiked ? (
                                <HeartIconFilled onClick={likePost} className='btn text-red-500' />
                            ) : (

                                <HeartIcon onClick={likePost} className='btn' />
                            )
                        }
                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn' />
                    </div>

                    <BookmarkIcon className='btn' />
                </div>
            )}

            {/* Captions */}
            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1'>{likes.length} likes</p>
                )}

                <span className='font-bold mr-1'>{username}</span>
                {caption}
            </p>

            {/* Comments */}
            {/* {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                    {comments.map(comment => {
                        <div className='flex items-center space-x-2 mb-3' key={comment.id} >
                            <img className='h-7 rounded-full' src={comment.data().userImage} alt="" />
                            <p className='text-sm flex-1 '> <span className='font-bold'>{comment.data().username}</span> {comment.data().comment}</p>
                            <Moment className='pr-5 text-xs' fromNow>
                                {comment.data().timsestamp?.toDate()}
                            </Moment>
                        </div>
                    })}
                </div>
            )} */}



            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                <div className='flex items-center space-x-2 mb-3'>
                    {/* <img className='h-7 rounded-full' src={session.user.userImg} alt="" /> */}
                    <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-1' alt="" />
                    <p className='text-sm flex-1 '><span className='font-bold mx-1'>{session.user.username}</span>Hello</p>
                    <Moment className='pr-5 text-xs' fromNow>
                        {session.user.timsestamp?.toDate()}
                    </Moment>
                </div>

                <div className='flex items-center space-x-2 mb-3'>
                    {/* <img className='h-7 rounded-full' src={session.user.userImg} alt="" /> */}
                    <img src="/angelina.jpeg" className='rounded-full h-12 w-12 object-contain border p-1 mr-1' alt="" />
                    <p className='text-sm flex-1 '><span className='font-bold mx-1'>Angelina</span>Hi there...</p>
                    <Moment className='pr-5 text-xs' fromNow>
                        {session.user.timsestamp?.toDate()}
                    </Moment>
                </div>

                <div className='flex items-center space-x-2 mb-3'>
                    {/* <img className='h-7 rounded-full' src={session.user.userImg} alt="" /> */}
                    <img src={session.user.userImage} className='rounded-full h-12 w-12 object-contain border p-1 mr-1' alt="" />
                    <p className='text-sm flex-1 '><span className='font-bold mx-1'>{session.user.username}</span>Hola</p>
                    <Moment className='pr-5 text-xs' fromNow>
                        {session.user.timsestamp?.toDate()}
                    </Moment>
                </div>
            </div>





            {/* Input box */}
            {
                session && (

                    <form className='flex items-center p-4'>
                        <EmojiHappyIcon className='h-7 text-red-600' />
                        <input type="text"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='Add a comment...'
                            className='border-none flex-1 focus:ring-0 outline-none'
                        />
                        <button
                            type='submit'
                            disabled={!comment.trim()}
                            onClick={sendComment}
                            className='font-bold text-red-600'>
                            Post
                        </button>
                    </form>
                )
            }
        </div>
    )
}
