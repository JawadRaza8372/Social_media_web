import React,{useState} from 'react'
import BtTxtPic from "./BtTxtPic"
import ModelP from './ModelP'
import Post from './Post'
function MiniPost() {
    const [open, setopen] = useState(false)
    return (
      <>
     
<div class="container">
  <img src="https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg" alt="Avatar" class="image"/>
 <a onClick={()=>{setopen(true)}}>
  <div class="overlay">
  <div style={{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"50px"}}>
<BtTxtPic style={{marginRight:"10px"}} text2="123" icon6="h"/>
<BtTxtPic text2="121" icon7="h"/>
  </div>
  </div>
</a>
</div>
<ModelP openModel={open} closeModel={()=>{setopen(false)}}>
<Post avat="https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg" postimg="https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg" username="username" caption="caption"/>
</ModelP>
</>
    )
}

export default MiniPost
