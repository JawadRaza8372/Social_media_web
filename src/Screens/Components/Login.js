import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {auth} from "../../FirebaseConfig/FirebaseConfig";
function Login() {
  let location=useHistory()
    const [state, setstate] = useState({email:'',password:''});
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
        auth.signInWithEmailAndPassword(
         state.email,
          state.password
        ).then(() => {
          location.push('/')
        }).catch((err) => {
          setError(err.message)
        });
            }
               
                            
       useEffect(() => {
        const interval = setInterval(() => {
            setError(null)
            }, 5000);
        return () => clearInterval(interval);
      }, [Error]);                
                                       
    return (<>
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Login</h1><br/>
  <div className="form-group">
    <input type="email" className="form-control" onChange={handlein} id="email" autoComplete="off" placeholder="Enter email" required autoComplete="off"/>
  </div><br/>
  <div className="form-group">
    <input type="password" className="form-control" minLength={6}  onChange={handlein} id="password" placeholder="Password"  required autoComplete="off"/>
  </div>    
<br/>
{(Error)?<p style={{color:"red"}}>{Error}</p>:null}
  <button type="submit"  className="btn bttn btn-outline-primary mb-3">Login</button>
  <p onClick={()=>location.push('/signup')} style={{marginTop:"10px",cursor:"pointer"}}>Don't have an Account ??? SignUp</p>
</form>
   </> )
}

export default Login
