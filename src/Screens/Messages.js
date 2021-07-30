import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import MessagesContainer from './Components/MessagesContainer';
import MessagesSidebar from './Components/MessagesSidebar';
import MessagesText from './Components/MessagesText';
import {db} from "../FirebaseConfig/FirebaseConfig"
import ListAltIcon from '@material-ui/icons/ListAlt';
function Messages({user}) {
    const [messages, setmessages] = useState(null)
    useEffect(() => {
        db.collection('mesges').orderBy('senddate','asc').onSnapshot(snapshot=>{
            setmessages(snapshot.docs.map(doc=>((doc.data()))))
        })
    }, [])
    let location=useHistory()
    let {id}=useParams();
   if(user){ 
       return (
        <div style={{display:"grid",placeItems:'center',height:"90vh",width:"100%",overflow:"hidden"}}>
       
        <div className="row" style={{minWidth:'300px',width:"80%",overflow:"hidden",padding:"10px"}}>
            <div className="col-3" style={{border:'1px solid lightgrey',height:'80vh'}}>
            <h4 style={{textAlign:'center',marginTop:"10px",paddingBottom:"10px",marginBottom:"10px",borderBottom:'1px solid lightgrey'}}><ListAltIcon style={{fontSize:'35px'}}/> Chat List</h4>
<MessagesSidebar/>
                </div>
            <div className="col-9" style={{border:'1px solid lightgrey',height:'80vh'}}>
            <MessagesContainer roomid={id} curntuser={user}>
            <br/>
                {messages && messages.map((msg)=>{
                    if(msg.roomid === id){
                        return (<MessagesText datas={msg} curntuser={user}/>)
                    }
                })

                }
            </MessagesContainer>
            </div>
        </div>
        </div>
    )}
    else{
        location.push("/");
        return null
    }
}

export default Messages
