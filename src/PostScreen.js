import React from 'react'
import PosterUser from './PosterUser'
import PostFetching from './PostFetching'
import PosterUserWthBtn from './PosterUserWthBtn'

function PostScreen() {
    return (
       
        <div className="col-10 mx-auto mt-4">
            <div className="row justify-content-center">
           <div className="col col-10 col-xs-10 col-sm-10 col-lg-8 col-md-10 col-xl-8">
               <PostFetching/>
           </div> 
           <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-4 col-xl-4">
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
