import React from 'react'

function InfoUpdate() {
    return (
        <div className=" row justify-content-center">
        <div className="col-8 ">
            <h4>Update Info</h4>
            <br/>
            <div className="form-group">
            <input type="text"  className="form-control" placeholder="First name" /></div>
            <br/>
            <div className="form-group">
            <input type="text"  className="form-control" placeholder="Last Name" /></div><br/>
            <br/>
<button className="btn btn-outline-success">Update</button>
        </div></div>
    )
}

export default InfoUpdate
