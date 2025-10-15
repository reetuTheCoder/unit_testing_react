import React from "react";
import { useAuth } from "../context/AuthContext";

console.log(useAuth);

const AuthApp = () => {
  const { state, login, logOut } = useAuth();

  const handleToggle = () => {
    if (state.isAuth) {
      logOut();
    } else {
      login({ name: "Reetu Singh", email: "reetu@gmail.com" });
    }
  };
  return (
    <div>
      <h2>
        {state.isAuth
          ? `Welcome, ${state.user.name}!`
          : "Please log in to continue"}
      </h2>

      <button onClick={handleToggle}>
        {state.isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default AuthApp;
