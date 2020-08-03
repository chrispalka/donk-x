import React, { component } from "react";

const Register = (props) => (
  <div className="container">
    <form className="register" onSubmit={props.login}>
      <div className="form-group">
        <input type="text" name="registerUsername" onChange={props.onChange} placeholder="Create username"></input>
      </div>
      <div className="form-group">
        <input type="password" name="registerPasword" onChange={props.onChange} placeholder="Create password"></input>
      </div>
      <button type="submit" className="btn btn-primary">GO</button>
    </form>
  </div>
)


export default Register