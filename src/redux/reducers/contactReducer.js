import { UPDATE_FORMS_FIELD, SUBMIT, SUCCESS, ERROR } from "../actions/contactActions";

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
    case UPDATE_FORMS_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case SUBMIT:
      return {
        ...state,
        isSubmitting: true,
      };

    case SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        successMessage: "Form submitted successfully!",
      };

    case ERROR:
      return {
        ...state,
        isSubmitting: false,
        errorMessage: "Something went wrong!",
      };

    default:
      return state;
  }
}
