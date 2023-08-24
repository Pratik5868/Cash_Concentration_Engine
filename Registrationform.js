import React from 'react'
import './Loginpage.css';

const Registrationform=()=>{
	return(
		<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register User Here</h3>
          
          <div className="form-group mt-3">
            <label>UserID</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Userid"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Re-enter Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Re-enter  password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Role"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
	)
}

export default Registrationform   