export const UPDATE_FORMS_FIELD = "UPDATE_FORMS_FIELD";
export const SUBMIT = "SUBMIT";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const updateField = (field, value) => ({
  type: UPDATE_FORMS_FIELD,
  payload: { field, value },
});

export const submitForm = () => ({
  type: SUBMIT,
});


export const submitSuccess = () => ({
  type: SUCCESS,
});

export const submitError = () => ({
  type: ERROR,
});

