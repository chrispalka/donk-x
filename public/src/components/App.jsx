import React, { component } from "react";
import ReactDOM from "react-dom";
import Main from './Main.jsx';
import Login from './Login.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      loginComplete: false
    }
  }

  onChange = (e) => {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append('username', this.state.username)
    fetch('/login', {
      method: 'POST',
      body: data
    })
    this.setState(state => ({
      loginComplete: !this.state.loginComplete
    }));
  }

  render() {
    if(!this.state.loginComplete) {
      return (
        <Login login={this.handleSubmit} onChange={this.onChange.bind(this)} value={this.state.username}/>
      )
    } else {
      return (
        <Main username={this.state.username} />
      )
    }
  }
}

export default App;