import { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(async () => {
    async function authorizeUser() {
      console.log(localStorage.getItem("sms_token"));
      const res = await axios.get("http://localhost:5000/api/Base", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("sms_token"),
        },
      });

      setCurrentUser(res.data);
      setIsLoggedIn(true);
    }

    try {
      setLoading(true);

      await authorizeUser();

      setLoading(false);
    } catch (err) {

      setLoading(false);
      setIsLoggedIn(false);
      history.push("/login");
    }
  }, []);

  if (loading) return null;
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
