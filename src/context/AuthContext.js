import React, { createContext, useContext, useReducer } from "react";

const initialAuthState = {
  user: null,
  isAuth: false,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

const AuthContext = createContext();
console.log("AuthContextAuthContext", AuthContext);

export const AuthProvider = ({ children }) => {
  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <div>
      <AuthContext.Provider value={{ state, login, logOut }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
