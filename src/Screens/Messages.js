import { CardHeader, IconButton,Avatar } from '@material-ui/core';
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import MessagesContainer from './Components/MessagesContainer';
import MessagesSidebar from './Components/MessagesSidebar';
import MessagesText from './Components/MessagesText';
import PosterUser from './Components/PosterUser';

function Messages() {
    let location=useHistory()
    let {id}=useParams();
    console.log(id)
    return (
        <div style={{display:"grid",placeItems:'center',height:"90vh",width:"100%",overflow:"hidden"}}>
       
        <div className="row" style={{width:"100%%",overflow:"hidden"}}>
            <div className="col-3" style={{border:'1px solid lightgrey',height:'80vh'}}>
<MessagesSidebar/>
                </div>
            <div className="col-9" style={{border:'1px solid lightgrey',height:'80vh'}}>
            <MessagesContainer>
            <br/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>
                <MessagesText/>

            </MessagesContainer>
            </div>
        </div>
        </div>
    )
}

export default Messages
