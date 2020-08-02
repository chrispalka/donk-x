import React, { component } from "react";


const Login = (props) => (
  <div className="container">
    <form className="login" onSubmit={props.login}>
      <label htmlFor="username">Login:</label>
      <input type="text" name="username" value={props.username} onChange={props.onChange} placeholder="Enter name"></input>
      <button type="submit" className="btn btn-primary">GO</button>
    </form>
  </div>
)


export default Login