import MyForm from "./components/MyForm";
import FormProvider from "./store/FormProvider";

function App() {
  return (
    <FormProvider>
      <MyForm />
    </FormProvider>
  );
}

export default App;
