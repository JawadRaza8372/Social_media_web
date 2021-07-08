import React,{useEffect, useState} from 'react'
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "../../FirebaseConfig/FirebaseConfig";
function UploadPost({userinfo}) {
    const [state, setstate] = useState({caption:'',img:""});
    const [fs,setf]=useState(null);
    const [suser,setuser]=useState(null);
    const handlein=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setstate((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }
            })
        }
            const submit=(e)=>{
                e.preventDefault();
        console.log(state);
              auth.onAuthStateChanged((user) => {
                if (user) {
                  var uid = user.uid;
                    console.log(uid);
                    setuser(user.uid);
                    db.collection('posts').add({
                        postedBy:uid,
                        avat:userinfo.img,
                        username:userinfo.firstname+" "+userinfo.lastname,
                        caption:state.caption,
                        postimg:state.img
                    }).then(()=>console.log("------datasaved--posted---")).catch((error)=>{console.log("ufff")})
                } else {
                    console.log("------datasave--error---");
              }});
            }
                           
const handleUploadSuccess = filename => {
                        storage.ref("images") 
                          .child(filename)
                          .getDownloadURL()
                          .then(url => { state.img= url;
console.log("success");     
setf("done");
                        }
                          );
                      };

                      const handleUploadError = error => {
                        console.error(error);
                    };
                    
useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
            console.log(uid);
            setuser(user.uid);
        } else {
            setuser(null);
            console.log("logged -in");
      }});
},[]);                      
    return (
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Share Your Memories</h1><br/>
<div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="caption" autoComplete="off" placeholder="Caption"/>
  </div><br/>
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
          /></div>
          {(fs==="done")?<p className="blacksimpletxt">Profile Picture Status:Uploaded</p>:null}

  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Upload Post</button>
</form>

    )
}

export default UploadPost
