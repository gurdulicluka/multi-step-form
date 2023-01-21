import React, { useContext } from "react";
import { FormContext } from "../store/FormProvider";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MyForm() {
  const { state, handleSubmit } = useContext(FormContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-4 bg-LightBlue w-1/2 border-2 border-[#000] p-10"
        onSubmit={handleSubmit}
      >
        {state.step === 1 && <StepOne />}
        {state.step === 2 && <StepTwo />}
      </form>
    </div>
  );
}

export default MyForm;
