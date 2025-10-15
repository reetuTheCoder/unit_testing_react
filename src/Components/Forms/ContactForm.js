import React, { useReducer } from "react";
import { initialState, formReducer } from "./formReducer";

const contectInitialStateVal = {
  ...initialState,
  email: "",
  fname: "",
  lname: "",
  text: "",
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, contectInitialStateVal);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(state);
    
    dispatch({ type: "SUBMIT" });
    setTimeout(() => {
      if (state.fname && state.lname && state.email && state.text) {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({ type: "ERROR" });
      }
    }, 1500);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Contact Form for User</h2>
        <input
          type="fname"
          placeholder="First Name"
          value={state.fname}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FORMS_FIELD",
              field: "fname",
              value: e.target.value,
            })
          }
        />
        <input
          type="lname"
          placeholder="Last Name"
          value={state.lname}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FORMS_FIELD",
              field: "lname",
              value: e.target.value,
            })
          }
        />
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
        <textarea
          type="text"
          placeholder="Message"
          value={state.text}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FORMS_FIELD",
              field: "text",
              value: e.target.value,
            })
          }
        />
        <br /> <br />
        <button type="submit" disabled={state.isSubmitting}>
          {" "}
          {state.isSubmitting ? "Submitting..." : "Contect Us"}
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

export default ContactForm;
