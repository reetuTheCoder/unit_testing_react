import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitError,
  submitForm,
  submitSuccess,
  updateField,
} from "../../redux/actions/contactActions";


const NewContactForm = () => {
  const state = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

      console.log(state);
    const { fname, lname, email, text } = state;
    dispatch(submitForm());
   
    setTimeout(() => {
      if (fname && lname && email && text) {
        dispatch(submitSuccess());
      } else {
        dispatch(submitError());
      }
    }, 1500);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Contact Form for User</h2>
        <input
          type="text"
          placeholder="First Name"
          value={state.fname}
          onChange={(e) => dispatch(updateField("fname", e.target.value))}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={state.lname}
          onChange={(e) => dispatch(updateField("lname", e.target.value))}
        />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => dispatch(updateField("email", e.target.value))}
        />
        <textarea
          placeholder="Message"
          value={state.text}
          onChange={(e) => dispatch(updateField("text", e.target.value))}
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

export default NewContactForm;
