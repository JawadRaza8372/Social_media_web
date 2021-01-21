import React,{useState,useEffect} from 'react'
import Post from "./Post";
import {db,auth} from "./FirebaseConfig"

function PostFetching() {
    const [posts,setposts]=useState("");
    useEffect(()=>{
        db.collection("posts").orderBy('username').get().then();

        db.collection("posts").onSnapshot((snapshot)=>{
          setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
        })
        },[]);
    return (
        <div>
        {posts && posts.map((avin)=>{ console.log(avin); return <Post avat={avin.post.avat} username={avin.post.username} postimg={avin.post.postimg} caption={avin.post.caption} key={avin.id}/>})

    }
    </div>
    )
}

export default PostFetching
