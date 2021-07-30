import React,{useEffect, useState} from 'react'
import FileUploader from 'react-firebase-file-uploader';
import { useHistory } from 'react-router-dom';
import {storage,auth, db} from "../../FirebaseConfig/FirebaseConfig";
function SignUp() {
  let location=useHistory()
    const [state, setstate] = useState({email:'',password:'',firstname:"",lastname:"",img:""});
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

            auth.createUserWithEmailAndPassword(state.email, state.password).then((user)=>{
              auth.onAuthStateChanged((user) => {
                if (user) {
                  var uid = user.uid;
                    db.collection("users").doc(uid).set({
                        email:state.email,
                        password:state.password,
                        firstname:state.firstname,
                        lastname:state.lastname,
                        img:state.img,
                        posts:'0',
                        followers:[],
                        following:[],
                        save:[]
                    })
                } else {
                    console.log("   ------datasave--error---");
              }});
            }
                
            ).catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode+"   ------"+errorMessage)
            });
           
            location.push('/')
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
                    
useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
        } else {
            console.log("   ------datasave--error---");
      }});
},[]);                      
    return (<div style={{width:"80%"}}>
        <form style={{border:"1px solid lightgrey",padding:35,marginBottom:"15px"}} onSubmit={submit}>
        <center>
        <img className="app_headerImg" 
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
        </center>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Sign Up</h1><br/>
<center>
<div style={{width:"70%"}}>
<h5 className="blacksimpletxt" style={{textAlign:"center",color:"GrayText"}}>Sign up to see photos and videos from your friends.</h5>
</div>
</center>

<br/>
<div className="form-group">
    <input type="text" className="form-control" minLength={3} onChange={handlein} id="firstname" autoComplete="off" placeholder="Enter First Name" required autoComplete="off"/>
  </div><br/>
  <div className="form-group">
    <input type="text" className="form-control" minLength={3} onChange={handlein} id="lastname" autoComplete="off" placeholder="Enter Last Name" required autoComplete="off"/>
  </div><br/>
  <div className="form-group">
    <input type="email" className="form-control" onChange={handlein} id="email" autoComplete="off" placeholder="Enter email" required autoComplete="off"/>
  </div><br/>
  <div className="form-group">
    <input type="password" className="form-control" minLength={6}  onChange={handlein} id="password" placeholder="Password" required autoComplete="off"/>
  </div>    
<br/>
  <div className="form-group">
  <FileUploader className="component"
            name='avatar'
            required
            randomizeFilename
            storageRef={
              storage.ref("images")
            }
            onUploadStart = {null}
            accept="image/*"
            onUploadError = {handleUploadError}
            onUploadSuccess = {handleUploadSuccess}
            onProgress = {null}
          /></div>
{ fs && <p className="blacksimpletxt mt-3 mb-3">Profile Picture Status{(fs==="done")?": uploaded":": pending"}</p>
}
  <br/>
  { fs && (fs==="done")?<button type="submit"  className="btn bttn btn-outline-primary mb-3">SignUp</button>:null
}
  
</form>
 <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",border:"1px solid lightgrey",width:'100%'}}>
  <p onClick={()=>location.push('/login')} style={{marginTop:"10px",cursor:"pointer"}}>Have an acount !! <span style={{color:"#0d6efd",fontWeight:"bold"}}>Login</span></p>
  </div>
   </div> )
}

export default SignUp
