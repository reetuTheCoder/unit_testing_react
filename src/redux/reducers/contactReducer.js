import { UPDATE_FIELD, SUBMIT_FORM, SUBMIT_SUCCESS, SUBMIT_ERROR } from "../actions/contactActions";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  text: "",
  isSubmitting: false,
  successMessage: "",
  errorMessage: "",
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case SUBMIT_FORM:
      return {
        ...state,
        isSubmitting: true,
        successMessage: "",
        errorMessage: "",
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        successMessage: "Form submitted successfully!",
        errorMessage: "",
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        isSubmitting: false,
        successMessage: "",
        errorMessage: "Something went wrong!",
      };

    default:
      return state;
  }
}
