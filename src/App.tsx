import { useForm } from "react-hook-form";
import "./style.css";

import { Select } from "./form";

function App() {
  const data = [
    { value: "begusarai", label: "Begusarai" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
  ];
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <div className="pt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          data={data}
          register={register}
          setValue={setValue}
          registerName={"firstName"}
          placeholder="name"
          className="text-black"
        />

        <Select
          data={data}
          register={register}
          setValue={setValue}
          registerName={"select"}
          placeholder="name"
          className="text-black"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
