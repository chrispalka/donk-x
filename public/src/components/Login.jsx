import React, { component } from "react";


const Login = (props) => (
  <div className="container">
    <form onSubmit={props.login}>
      <h1>Login</h1>
      <div className="form-group">
        <input type="text" name="loginUsername" onChange={props.onChange} placeholder="username"></input>
      </div>
      <div className="form-group">
        <input type="password" name="loginPassword" onChange={props.onChange} placeholder="password"></input>
      </div>
      <button type="submit" className="btn btn-primary">GO</button>
    </form>
  </div>
)


export default Login

