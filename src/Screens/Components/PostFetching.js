import React,{useState,useEffect} from 'react'
import Post from "./Post";
function PostFetching({postdata}) {
    return (
        <div>
        {postdata && postdata.map((avin)=>{return <Post  userid={avin.post.postedBy} postimg={avin.post.postimg} caption={avin.post.caption} key={avin.id}/>})

    }
    </div>
    )
}

export default PostFetching
