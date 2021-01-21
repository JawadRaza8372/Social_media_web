import React from 'react'
import Avatar from "@material-ui/core/Avatar";

function PosterUser({Data,title,subtitle}) {
    return (
        <div  className="col-8">
        <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-3">
        <Avatar style={{height:"50px",width:"50px",marginLeft:"5px"}}  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
        </div>
<div style={{alignItems:"center",paddingTop:"10px",paddingBottom :"10px"}} className="col-9">
    <h6>Name</h6>
    <h7>description</h7>
</div>
        </div></div>
    )
}

export default PosterUser
