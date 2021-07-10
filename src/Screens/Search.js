import React,{useState,useEffect} from 'react'
import PosterUserFollowButton from './Components/PosterUserFollowButton';
import {db} from "../FirebaseConfig/FirebaseConfig"

function Search() {
    const [inputv, setinputv] = useState('');
    const [searchval, setsearchval] = useState('');

    const [usersData, setusersData] = useState(null)
    let submitfun=(e)=>{
        e.preventDefault();
        setsearchval(inputv)
    }
    useEffect(()=>{
        db.collection("users").onSnapshot((snapshot)=>{
            setusersData(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          })
        },[]);
    return (
        <>
     <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 mx-auto mt-4">
            <div  className="row justify-content-center">
            <div className="col-xs-10 col-sm-10 col-md-8 col-xl-6 col-lg-6" ><center>
            <form onSubmit={submitfun} style={{border:'1px solid green',borderRadius:"20px",overflow:"hidden"}}>
            <div  className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10" style={{alignItems:"flex-start"}} >
            <input type="email" onChange={(e)=>setinputv(e.target.value)} placeholder="Enter Email To Search" style={{width:"80%",height:'40px',outlineWidth:"0px",border:"none",paddingLeft:"10px",marginLeft:"10px"}} />
            </div>            
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-10" >
<button type="submit" className="btn btn-outline-success">Search</button>
</div></div>
</form>

            </center>
            </div>
           </div>
           <br/>
<br/>

    <div  className="row">
    {searchval && <h1>Results</h1>}
<div className="row">
<center>
{usersData && usersData.map((user)=>{
    if(user.post.email === searchval){
        return (<PosterUserFollowButton key={user.id} userinfo={user.post} userId={user.id} />)
    }
})

}

</center>
</div>
</div>


         
           </div>
        </>
    )
}

export default Search
