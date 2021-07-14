import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import firebase,{auth,db} from "../FirebaseConfig/FirebaseConfig"
function Passwordupdate({user,Data}) {
    const [state, setstate] = useState({oldpassword:'',password:'',confirm:''})
    const [chatnotif, setchatnotif] = useState(false)
    const [errorMessage, seterrorMessage] = useState(null)
    let location=useHistory()
    useEffect(() => {
        const interval = setInterval(() => {
            setchatnotif(false)
            }, 5000);
        return () => clearInterval(interval);
      }, [chatnotif]);
      useEffect(() => {
        const interval = setInterval(() => {
            seterrorMessage(null)
            }, 5000);
        return () => clearInterval(interval);
      }, [errorMessage]);
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
   
        let submitfun=async(e)=>{
            e.preventDefault();
            if (state.oldpassword && state.oldpassword !== ''){
                if(state.password === state.confirm){
                    let email=auth.currentUser.email;
                    let password=state.oldpassword;
                        let credential=await firebase.auth.EmailAuthProvider.credential(email,password)
                    auth.currentUser.reauthenticateWithCredential(credential).then(()=>{
                        db.collection('users').doc(user).update({password:state.password}).then(()=>{
                            auth.currentUser.updatePassword(state.password).then(()=>{
                             setchatnotif(true)
                             setstate({oldpassword:'',password:'',confirm:''})
                            })
                        })
                    }).catch((error)=>seterrorMessage(error.message))
                  
                }
                else{
                    alert("Please Enter Same Password")
                }
            }
            else{
                alert("Please Enter Current Password")

            }
            
        }
        if (user){
            return (
                <div className=" row justify-content-center">
                <div className="col-8 ">
                    <h4>Change Password</h4>
                    <form onSubmit={submitfun}>
                    <div className="form-group">
                    <input type="password" id="oldpassword" minLength={6} value={state.oldpassword} onChange={handlein} className="form-control" placeholder="Enter Old Password" /></div>
                    <br/>
                    <div className="form-group">
                    <input type="password" id="password" minLength={6} value={state.password} onChange={handlein} className="form-control" placeholder="Enter New Password" /></div>
                    <br/>
                    <div className="form-group">
                    <input type="password" id='confirm' minLength={6} value={state.confirm} onChange={handlein} className="form-control" placeholder="Re-Enter New Password" /></div>
                    <br/>
        <button type='submit' className="btn btn-outline-success">submit</button>
                    </form>
            <br/>
            {chatnotif && <div style={{background:"green",color:"white",display:"grid",placeItems:"center",padding:"10px",height:"50px",borderRadius:"10px"}}>
            <p>Password Changed</p>
        </div>}
        {errorMessage && <div style={{background:"red",color:"white",display:"grid",placeItems:"center",padding:"10px",height:"50px",borderRadius:"10px"}}>
            <p>{errorMessage}</p>
        </div>}
                </div></div>
            )
        }
        else{
            location.push('/')
            return null
        }
    
}

export default Passwordupdate
