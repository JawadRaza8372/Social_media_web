import React from 'react'

function MessagesText() {
    return (
        <>
          <div className="leftdiv">
          <div style={{display:'flex',justifyContent:'space-between',border:"none"}}>
            <p style={{fontSize:"12px"}}>date</p>
            <p style={{fontSize:"12px"}}>time</p>
          </div>
              <p>text</p>
          </div> 
          <div className="rightdiv">
          <div style={{display:'flex',justifyContent:'space-between',border:"none"}}>
            <p style={{fontSize:"12px"}}>date</p>
            <p style={{fontSize:"12px"}}>time</p>
          </div>
              <p>text</p>
          </div>
        </>
    )
}

export default MessagesText
