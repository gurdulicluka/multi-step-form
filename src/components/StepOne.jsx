import React, { useContext } from "react";
import { FormContext } from "../store/FormProvider";

const StepOne = () => {
  const { state, handleChange, handleBlur, handleNext } =
    useContext(FormContext);

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="personal.name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={state.formData.personal.name}
        placeholder="e.g Stephen King"
      />
      <label>Email Address</label>
      <input
        className={`${
          state.formErrors.personal.email ? "border-2 border-[red]" : ""
        }`}
        type="email"
        name="personal.email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={state.formData.personal.email}
        placeholder="e.g stephenking@lorem.com"
      />
      <label>Phone Number</label>
      <input
        type="number"
        name="personal.phone"
        onChange={handleChange}
        onBlur={handleBlur}
        value={state.formData.personal.phone}
        placeholder="e.g +1 234 567 890"
      />
      <button
        className="max-w-fit rounded-lg bg-MarineBlue text-White p-4"
        onClick={handleNext}
      >
        Next Step
      </button>
    </>
  );
};

export default StepOne;
