import React,{useState,useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar";
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "./FirebaseConfig";
import ModelP from "./ModelP";
function ProfilePhoto() {
    const [state, setstate] = useState();
    const [open, setOpen] =useState(false);

    const [fs,setf]=useState(null);
    const handleUploadSuccess = filename => {
        storage.ref("images") 
          .child(filename)
          .getDownloadURL()
          .then(url => { setstate(url);
console.log("success");     
setf("done");
        }
          );
      };

      const handleUploadError = error => {
        console.error(error);
    };
    return (
        <div className=" row my-auto justify-content-center">
        <div className="col-8">
        <center>
            <h4>Update Profile Photo</h4>
            <div style={{display:"flex",alignItems:"center"}} className="row mt-2 mb-2">
        <div className="mx-auto col-xs-10 col-sm-10 col-md-6 col-xl-4 col-lg-4 order-1">
        <a onClick={()=>{setOpen(true)}}><Avatar style={{height:"180px",width:"180px"}}   src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
        </a></div></div>
<p>Click on photo to Update</p>
</center>
        </div>
        
        <ModelP openModel={open} closeModel={()=>{setOpen(false)}} >
     <h3>Upload Photo</h3>
     <div className="form-group">
  <FileUploader className="component"
            accept='*' name='avatar'
            randomizeFilename
            storageRef={
              storage.ref("images")
            }
            onUploadStart = {null}
            onUploadError = {handleUploadError}
            onUploadSuccess = {handleUploadSuccess}
            onProgress = {null}
          />

          </div>
          <p className="blacksimpletxt">Profile Picture Status:{(fs==="done")?"uploaded":null}</p>
<button>Upload</button>
     </ModelP>   
       
        </div>
    )
}

export default ProfilePhoto
