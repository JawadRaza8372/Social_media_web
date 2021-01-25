import React from 'react'
import Menu from './Menu'
import Content from "./Content"
function EditProfile() {
    return (
        <div className="col-10 mx-auto mt-4">
        <div className="row justify-content-center">
       <div className="col-2">
           <Menu/>
       </div> 
       <div className="col-10">
      <Content/>
       </div> 

        </div>
    </div>
    )
}

export default EditProfile
