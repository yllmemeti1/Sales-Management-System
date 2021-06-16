import React, { useState } from "react";
import "./login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { AiOutlineBgColors } from "react-icons/ai";


const Login = (props) => {
  const [input, setInput] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/Account/Login", {
        ...input,
      });

      localStorage.setItem("sms_token", res.data.token);
      history.push("/dashboard");
    } catch (err) {
      alert("Incorrect email/passsword");
    }
  };

  return (
    <div className="div-login">
      <div>{/* <img src={Logo} alt="Logo" />; */}</div>
      <div>
        <form onSubmit={handleSubmit}>
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
              placeholder="Shënoni Email-in..."
              required
              onChange={handleChange}
            />
          </div>
          <div class="password">
            <input
              type="password"
              name="password"
              placeholder="Shënoni Password-in..."
              required
              onChange={handleChange}
            />
          </div>
          <div class="buttons">
            <div class="button1">
              <button class="button12"onSubmit={handleSubmit}>Kyquni</button>
            </div>
          </div>
        </form>
        <div class="buttons ">
          <Link to="/register">
            <button class="button12"> Regjistrohu </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
