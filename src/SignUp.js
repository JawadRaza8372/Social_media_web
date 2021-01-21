import React,{useEffect, useState} from 'react'
import "./index.css";
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "./FirebaseConfig";
function SignUp() {
    const [state, setstate] = useState({email:'',password:'',firstname:"",lastname:"",img:""});
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

            auth.createUserWithEmailAndPassword(state.email, state.password).then((user)=>{
              auth.onAuthStateChanged((user) => {
                if (user) {
                  var uid = user.uid;
                    console.log(uid);
                    db.collection("users").doc(uid).set({
                        email:state.email,
                        password:state.password,
                        firstname:state.firstname,
                        lastname:state.lastname,
                        img:state.img
                    })
                } else {
                    setuser(null);
                    console.log("   ------datasave--error---");
              }});
            }
                
            ).catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode+"   ------"+errorMessage)
            });
           
            
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
            console.log("   ------datasave--error---");
      }});
},[]);                      
    return (
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Sign Up</h1><br/>
<div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="firstname" autoComplete="off" placeholder="Enter First Name"/>
  </div><br/>
  <div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="lastname" autoComplete="off" placeholder="Enter Last Name"/>
  </div><br/>
  <div className="form-group">
    <input type="email" className="form-control" onChange={handlein} id="email" autoComplete="off" placeholder="Enter email"/>
  </div><br/>
  <div className="form-group">
    <input type="password" className="form-control"  onChange={handlein} id="password" placeholder="Password"/>
  </div>    
<br/>
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
          <p className="blacksimpletxt">Profile Picture Status:{(fs==="done")?"uploaded":null}</p>

  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">SignUp</button>
</form>

    )
}

export default SignUp
