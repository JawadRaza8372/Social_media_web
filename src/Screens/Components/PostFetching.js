import React,{useState,useEffect} from 'react'
import Post from "./Post";
import {db} from "../../FirebaseConfig/FirebaseConfig";

function PostFetching() {
    const [posts2,setposts2]=useState("");

    useEffect(()=>{
        db.collection("posts").orderBy('username',"desc").get().then((snapshot)=>{
            setposts2(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          })
        },[]);
    return (
        <div>
        {posts2 && posts2.map((avin)=>{return <Post avat={avin.post.avat} username={avin.post.username} postimg={avin.post.postimg} caption={avin.post.caption} key={avin.id}/>})

    }
    </div>
    )
}

export default PostFetching
