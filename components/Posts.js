import React, { useEffect, useState } from 'react';
import Post from './Post';
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import { db } from "../firebase";


// const post = [
//     {
//         id: "123",
//         username: "XYZ",
//         userImg: "https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg",
//         img: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg",
//         caption: "This is Dope",
//     },
//     {
//         id: "123",
//         username: "XYZ",
//         userImg: "https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png",
//         img: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376_960_720.jpg",
//         caption: "This is Dope",
//     },
//     {
//         id: "123",
//         username: "XYZ",
//         userImg: "https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg",
//         img: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376_960_720.jpg",
//         caption: "This is Dope",
//     },
// ]

export default function Posts() {

    const [posts, setPosts] = useState([]);


    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );


    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}


        </div>
    )
}
