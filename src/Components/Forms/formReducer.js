export function formReducer(state, action) {
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
export const initialState = {
  isSubmitting: false,
  successMessage: "",
  errorMessage: "",
};