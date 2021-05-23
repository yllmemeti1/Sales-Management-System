import React from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    pwd: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    /*artiola*/
  };

  render() {
    return (
      <div className="div-login">
        <div>{/* <img src={Logo} alt="Logo" />; */}</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label class="idjaMiresevini">
              Mirësevini
              <br />
            </label>
            <label class="idja2Miresevini">
              Shënoni të dhënat tuaja për tu kyqur në llogari
            </label>
            <div class="email">
              <input
                type="email"
                name="email"
                placeholder="Type your email..."
                required
                onChange={this.handleChange}
              />
            </div>
            <div class="password">
              <input
                type="password"
                name="pwd"
                placeholder="Type your password..."
                required
                onChange={this.handleChange}
              />
            </div>
            <div class="buttons">
            <div class="button1">
              <button onSubmit={this.handleSubmit}>Log In</button>
            </div>
            </div>
          </form>
          <div class="buttons">

          <Link to="/register">
            <button> Register </button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
