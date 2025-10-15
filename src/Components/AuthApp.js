import React from "react";
import { useAuth } from "../context/AuthContext";

console.log(useAuth);

const AuthApp = () => {
  const { state, login, logout } = useAuth();
  return (
    <div>
      <h2>
        {state.isAuth
          ? `Welcome, ${state.user.name}!`
          : "Please log in to continue"}
      </h2>

      {state.isAuth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          onClick={() =>
            login({ name: "Reetu Singh", email: "reetu@gmail.com" })
          }
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthApp;
