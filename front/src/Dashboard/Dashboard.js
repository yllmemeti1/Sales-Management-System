import React from "react";
import { useHistory } from "react-router";

function Dashboard() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("sms_token");
    history.push("/login");
  };

  return (
    <div>
      <h1>You are now logged in</h1>;<button onClick={logout}>Log out</button>
    </div>
  );
}

export default Dashboard;
