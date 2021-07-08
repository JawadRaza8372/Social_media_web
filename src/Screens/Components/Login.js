import React,{useState} from 'react'
import {auth} from "../../FirebaseConfig/FirebaseConfig";
function Login() {
    const [state, setstate] = useState({email:'',password:''});
    const [suser,setuser]=useState(null);
    const [success, setSuccess] = useState(null);
    const [Error, setError] = useState(null)
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
        auth.signInWithEmailAndPassword(
         state.email,
          state.password
        ).then(() => {
          console.log('LOGIN_SUCCESS');
          setSuccess("done")
        }).catch((err) => {
          console.log('LOGIN_failed');
          setError("error")
        });
            }
           
            
                            
                           
                                       
    return (
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Login</h1><br/>
  <div className="form-group">
    <input type="email" className="form-control" onChange={handlein} id="email" autoComplete="off" placeholder="Enter email"/>
  </div><br/>
  <div className="form-group">
    <input type="password" className="form-control"  onChange={handlein} id="password" placeholder="Password"/>
  </div>    
<br/>
{(Error)?<p style={{color:"red"}}>Login Failed</p>:null}
{(success)?<p style={{color:"green"}}>Login SucessFull</p>:null}
  <button type="submit"  className="btn bttn btn-outline-primary">Login</button>
</form>

    )
}

export default Login
