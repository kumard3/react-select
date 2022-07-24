import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Select from "./form";

function App() {
  const [test, setTest] = useState("");
  const { handleSubmit } = useForm();
  const onSubmit = () => alert(test);
  const data = [
    { value: "react", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
  ];

  console.log(test);
  return (
    <div className="pt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select data={data} test={test} setTest={setTest} />
        <button className="text-white" type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}

export default App;
