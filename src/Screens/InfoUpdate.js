import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {db} from "../FirebaseConfig/FirebaseConfig"
function InfoUpdate({user,Data}) {
    let location=useHistory();
    const [state, setstate] = useState(null)
    const [chatnotif, setchatnotif] = useState(false)

    useEffect(() => {
      setstate(Data)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setchatnotif(false)
            }, 5000);
        return () => clearInterval(interval);
      }, [chatnotif]);
        let submitfin=(e)=>{
            e.preventDefault()
            db.collection('users').doc(user).update({firstname:state.firstname,lastname:state.lastname}).then(()=>{
                setchatnotif(true)
            })
        }
        if(user){
            if (state){
            return (
                <div className=" row justify-content-center">
                <div className="col-8 ">
                    <h4>Update Info</h4>
                    <form onSubmit={submitfin}>
                    <br/>
                    <div className="form-group">
                    <input type="text" value={state.firstname} id="firstname" onChange={(e)=>{setstate({...state,firstname:e.target.value})}} className="form-control" placeholder="First name" /></div>
                    <br/>
                    <div className="form-group">
                    <input type="text" value={state.lastname} id="lastname" onChange={(e)=>{setstate({...state,lastname:e.target.value})}} className="form-control" placeholder="Last Name" /></div><br/>
                    <br/>
        <button type='submit' className="btn btn-outline-success">Update</button>
                    </form>
                    <br/>
                    {chatnotif && <div style={{background:"green",color:"white",display:"grid",placeItems:"center",padding:"10px",height:"50px",borderRadius:"10px"}}>
    <p>Information Updated</p>
</div>}
                </div></div>
            )
        }
        else{
            return <p>loading</p>
        }
    }
    else{
        location.push('/')
        return null
    }
    
}

export default InfoUpdate
