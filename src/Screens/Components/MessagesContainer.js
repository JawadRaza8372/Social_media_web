import React,{useState,useEffect} from 'react'
import {CardHeader,Avatar} from "@material-ui/core"
import ScrollToBottom from 'react-scroll-to-bottom';
import {db} from "../../FirebaseConfig/FirebaseConfig"
import SendIcon from '@material-ui/icons/Send';
function MessagesContainer({roomid,curntuser,children}) {
    const [inputval, setinputval] = useState('')
    const [roominfo, setroominfo] = useState(null)
    const [userinfo, setuserinfo] = useState(null)
    useEffect(() => {
        db.collection('chatroom').doc(roomid).get().then((doc)=>{
            setroominfo(doc.data())
        })
    }, [])
    useEffect(() => {
        if(roominfo){
            if(curntuser === roominfo.member1){
                db.collection('users').doc(roominfo.member2).get().then((doc)=>{
                    setuserinfo(doc.data())
                })
            }
            else{
                db.collection('users').doc(roominfo.member1).get().then((doc)=>{
                    setuserinfo(doc.data())
                })
            }
        }
    }, [roominfo])
    let onSubmitfun=async(e)=>{
        e.preventDefault();
        await db.collection('mesges').add({
            message:inputval,
            sender:curntuser,
            roomid:roomid,
            senddate:new Date().toLocaleString()
        }).then(()=>{
            setinputval('')
        })
    }
    console.log(userinfo)
    console.log(roominfo)
    if(userinfo && roominfo){
        return (
            <>
                          <div style={{height:'92%'}}>
                <div style={{border:"none",borderBottom:'1px solid lightgrey'}}>
                <CardHeader
            avatar={
              <Avatar style={{marginRight:"10px"}}  src={userinfo.img} alt={userinfo.email}/>
            }
            action={null}
            title={userinfo.email}
            subheader={roominfo.roomdate}
          />
                </div>
                
                <ScrollToBottom className="chatContainer">
                {children}
                </ScrollToBottom>
         
                </div>
                <div style={{height:'8%',border:"none",borderTop:"1px solid lightgrey",padding:"10px"}}>
                <form onSubmit={onSubmitfun} style={{height:"100%",margin:'auto'}}>
                    <input placeholder="Your Message" value={inputval} onChange={e=>setinputval(e.target.value)} style={{width:"100%",background:'transparent',height:'100%',outlineWidth:'0px',borderRadius:"20px",paddingLeft:"15px",paddingRight:"15px"}}/><button type="submit" style={{display:"none"}}>search</button>
                </form>
    </div>
      
            </>
        )
    }
    else{
        return (<div style={{display:"grid",placeItems:"center",height:"80vh"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <SendIcon style={{fontSize:"120px"}}/>
            <h5>Your Messages</h5>
        </div>
        </div>)
    }
}

export default MessagesContainer
