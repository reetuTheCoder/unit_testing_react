import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FORMS_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SUBMIT":
      return {
        ...state,
        isSubmitting: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        successMessage: "Form submitted successfully!",
      };
    case "ERROR":
      return {
        ...state,
        isSubmitting: false,
        errorMessage: "Something went wrong!",
      };
    default:
      return state;
  }
}
const initialState = {
  email: "",
  password: "",
  isSubmitting: false,
  successMessage: "",
  errorMessage: "",
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SUBMIT" });
    setTimeout(() => {
    if (state.email && state.password) {
      dispatch({ type: "SUCCESS" });
    } else {
      dispatch({ type: "ERROR" });
    }
  }, 1500);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FORMS_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FORMS_FIELD",
              field: "password",
              value: e.target.value,
            })
          }
        />
        <button type="submit" disabled={state.isSubmitting}>
          {" "}
          {state.isSubmitting ? "Submitting..." : "Login"}
        </button>

        {state.successMessage && (
          <p style={{ color: "green" }}>{state.successMessage}</p>
        )}
        {state.errorMessage && (
          <p style={{ color: "red" }}>{state.errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
