import React from 'react'
import PosterUser from './PosterUser'
import PostFetching from './PostFetching'
import PosterUserWthBtn from './PosterUserWthBtn'

function PostScreen() {
    return (
       
        <div className="col-10 mx-auto mt-4">
            <div className="row justify-content-center">
            <div className="col">
            <p style={{color:"grey"}}>Friends</p>
           <PosterUser/>
           <PosterUser/>
           <PosterUser/>
           </div> 
           <div className="col">
               <PostFetching/>
           </div> 
           <div className="col">
           <PosterUserWthBtn/>
           <p style={{color:"grey"}}>Suggestion For You</p>
           <PosterUser/>
           <PosterUser/>
           <PosterUser/>
           </div> 

            </div>
        </div>
                  
    )
}

export default PostScreen
