import React, { createContext, useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    personal: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      option: "",
      billing: "",
    },
    addons: [],
  },
  formErrors: {
    personal: {
      name: "",
      email: "",
      phone: "",
    },
  },
};

const FormContext = createContext(initialState);

function formReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "HANDLE_CHANGE":
      let updatedFormData = { ...state.formData };
      let updatedValue = action.value;
      let formDataPath = action.name.split(".");
      for (let i = 0; i < formDataPath.length - 1; i++) {
        updatedFormData = updatedFormData[formDataPath[i]];
      }
      updatedFormData[formDataPath[formDataPath.length - 1]] = updatedValue;
      return { ...state, formData: { ...state.formData } };
    case "HANDLE_ERROR":
      let updatedFormErrors = { ...state.formErrors };
      let updatedError = action.error;
      let formErrorsPath = action.name.split(".");
      for (let i = 0; i < formErrorsPath.length - 1; i++) {
        updatedFormErrors = updatedFormErrors[formErrorsPath[i]];
      }
      updatedFormErrors[formErrorsPath[formErrorsPath.length - 1]] =
        updatedError;
      return { ...state, formErrors: { ...state.formErrors } };
    default:
      return state;
  }
}

export default function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      dispatch({
        type: "HANDLE_ERROR",
        name: e.target.name,
        error: "Field is required",
      });
    } else {
      dispatch({
        type: "HANDLE_ERROR",
        name: e.target.name,
        error: "",
      });
    }
  };

  const handlePrev = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  const handleNext = () => {
    let isValid = true;
    Object.values(state.formErrors).forEach((section) => {
      Object.values(section).forEach((error) => {
        if (error) {
          isValid = false;
        }
      });
    });
    if (isValid) {
      dispatch({
        type: "NEXT_STEP",
      });
    }
  };

  return (
    <FormContext.Provider
      value={{
        state,
        handleChange,
        handleBlur,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext };
