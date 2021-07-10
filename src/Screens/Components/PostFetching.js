import React,{useState,useEffect} from 'react'
import Post from "./Post";
function PostFetching({crntuser,postdata}) {
    return (
        <div>
        {postdata && postdata.map((avin)=>{return <Post crntuser={crntuser} userid={avin.post.postedBy} postimg={avin.post.postimg} caption={avin.post.caption} likes={avin.post.likes} comments={avin.post.comments} key={avin.id}/>})

    }
    </div>
    )
}

export default PostFetching
