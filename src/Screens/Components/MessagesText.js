import React from 'react'

function MessagesText({datas,curntuser}) {
    return (
        <>
         {(datas.sender !== curntuser)? <div className="leftdiv">
              <p style={{fontWeight:'bold'}}>{datas.message}</p>
              <div style={{display:'flex',float:"right",border:"none"}}>
            <p style={{fontSize:"10px"}}>{datas.senddate}</p>
          </div>
          </div>:
          <div className="rightdiv">
              <p style={{fontWeight:'bold'}}>{datas.message}</p>
              <div style={{display:'flex',float:"left",border:"none"}}>
            <p style={{fontSize:"10px"}}>{datas.senddate}</p>
          </div>
          </div>}
        </>
    )
}

export default MessagesText
