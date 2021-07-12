import React from 'react'
import { useHistory } from 'react-router-dom'
import PosterUser from './PosterUser'
function MessagesSidebar() {
    let location=useHistory();
    return (
        <div style={{height:"100%",overflowX:'hidden',overflowY:"auto"}}>
                    <div style={{cursor:'pointer'}} onClick={()=>location.push(`/messages/${1}`)}><PosterUser  Data={null} title="hy" subtitle="hy"/></div>            
        
                    
        </div>
    )
}

export default MessagesSidebar
