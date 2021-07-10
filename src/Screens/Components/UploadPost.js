import React,{useState} from 'react'
import FileUploader from 'react-firebase-file-uploader';
import { useHistory } from 'react-router-dom';
import {storage,auth, db} from "../../FirebaseConfig/FirebaseConfig";
function UploadPost({userinfo}) {
  let location=useHistory()
const [state, setstate] = useState({caption:'',img:""});
    const [fs,setf]=useState(null);
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
                    db.collection('posts').add({
                        postedBy:userinfo,
                        caption:state.caption,
                        postimg:state.img,
                        posttime:new Date(),
                        likes:[],
                    }).then(()=>location.push('/')).catch((error)=>{console.log("ufff")})

                  }
                           
const handleUploadSuccess = filename => {
  setf("pending");

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
            accept="image/*"
            onUploadStart = {null}
            onUploadError = {handleUploadError}
            onUploadSuccess = {handleUploadSuccess}
            onProgress = {null}
          /></div>
          { fs && <p className="blacksimpletxt mt-3 mb-3">Profile Picture Status{(fs==="done")?": uploaded":": pending"}</p>
}

  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Upload Post</button>
</form>

    )
}

export default UploadPost
