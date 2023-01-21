import React, { useContext } from "react";
import { FormContext } from "../store/FormProvider";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MyForm() {
  const { state } = useContext(FormContext);
  console.log(state.step);

  return (
    <form className="flex flex-col gap-5 bg-LightBlue w-1/2 border-2 border-[#000]">
      {state.step === 1 && <StepOne />}
      {state.step === 2 && <StepTwo />}
    </form>
  );
}

export default MyForm;
