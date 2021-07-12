import React from 'react'
import {CardHeader,Avatar} from "@material-ui/core"
import ScrollToBottom from 'react-scroll-to-bottom';

function MessagesContainer({children}) {
    return (
        <>
                      <div style={{height:'92%'}}>
            <div style={{border:"none",borderBottom:'1px solid lightgrey'}}>
            <CardHeader
        avatar={
          <Avatar style={{marginRight:"10px"}}  src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='hy'/>
        }
        action={null}
        title='name'
        subheader='email'
      />
            </div>
            
            <ScrollToBottom className="chatContainer">
            {children}
            </ScrollToBottom>
     
            </div>
            <div style={{height:'8%',border:"none",borderTop:"1px solid lightgrey",padding:"10px"}}>
            <form onSubmit={null} style={{height:"100%",margin:'auto'}}>
                <input placeholder="Your Message" style={{width:"100%",background:'transparent',height:'100%',outlineWidth:'0px',borderRadius:"20px",paddingLeft:"15px",paddingRight:"15px"}}/><button type="submit" style={{display:"none"}}>search</button>
            </form>
</div>
  
        </>
    )
}

export default MessagesContainer
