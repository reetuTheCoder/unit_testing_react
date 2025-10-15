export const UPDATE_FIELD = "UPDATE_FIELD";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_ERROR = "SUBMIT_ERROR";

export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  payload: { field, value },
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});


export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});

