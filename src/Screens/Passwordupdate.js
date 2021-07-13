import React from 'react'

function Passwordupdate() {
    return (
        <div className=" row justify-content-center">
        <div className="col-8 ">
            <h4>Change Password</h4>
            <div className="form-group">
            <input type="text"  className="form-control" placeholder="Enter New Password" /></div>
            <br/>
            <div className="form-group">
            <input type="text"  className="form-control" placeholder="Re-Enter New Password" /></div>
            <br/>
<button className="btn btn-outline-success">submit</button>
        </div></div>
    )
}

export default Passwordupdate
