import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import PostScreen from "./Components/PostScreen"
import {db} from "../FirebaseConfig/FirebaseConfig"
function Home({user}) {
    const [posts, setposts] = useState(null)
    useEffect(()=>{
        db.collection("posts").orderBy('posttime','desc').onSnapshot((snapshot)=>{
            setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          })
        },[]);
    let location=useHistory();
    if(user){
        return (
            <PostScreen currentuser={user} post={posts}/>
    
        )
    }
    else{
location.push("/login")
return null
    }
    
}

export default Home
