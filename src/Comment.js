import React from 'react'

function Comment({commentedusername,commentedcaption}) {
    return (
        <p style={{marginLeft:"10px"}}><strong>{commentedusername}:</strong> {commentedcaption}</p>

    )
}

export default Comment
