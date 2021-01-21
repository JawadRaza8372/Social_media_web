import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import BtTxtPic from "./BtTxtPic";
import MiniPost from "./MiniPost"
function ProfilePage() {
    return (
        <div className="col-6 mx-auto mt-4">
         <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="col-3">
        <Avatar style={{height:"150px",width:"150px",marginLeft:"5px"}}  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
        </div>
<div style={{alignItems:"center"}} className="col-9">


<div style={{display:"flex",justifyItems:"center",flexDirection:"row"}}>
    <h5 style={{marginRight:"35px"}}>Name</h5>
    <p style={{marginRight:"35px"}}><a style={{cursor:"pointer"}} onClick={()=>{
        console.log("edit profile")
    }} className="btn-outline-dark">Edit Profile</a></p>
</div>

    <div style={{display:"flex",justifyItems:"center",flexDirection:"row"}}>
    <p style={{marginRight:"35px"}}>Post</p>
    <p style={{marginRight:"35px"}}>Followers</p>
    <p style={{marginRight:"35px"}}>Following</p>
</div>

    <h6>Email</h6>
</div>
        </div>



        <div  className="app_header2">
        <div className="row justify-content-center">
        <div className="col-6">
    <div className="row justify-content-center">
      <div className="col col-8">
      <div style={{display:"flex",flexDirection:"row",float:"right"}}>

      <a  style={{marginRight:"45px"}} onClick={()=>{console.log("clicked")}}>
<BtTxtPic text="Posts" icon5="g"/>
</a>

<a   onClick={()=>{console.log("clicked2")}}>
<BtTxtPic text="Saved" icon3="g"/>
</a>
</div></div></div></div></div></div>

<div className="row mt-3">
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    <div className="col-4">
        <MiniPost/>
    </div>
    
</div>


        </div>
    )
}

export default ProfilePage
