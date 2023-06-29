import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const { register, control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  const onSubmit = (data) => console.log("data", data);

  const watchResult = JSON.stringify(
    useWatch({ name: `test`, defaultValue: getValues(`test`), control })
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <ul>
        {fields.map((item, index) => {
          return (
            <Row
              item={item}
              index={index}
              register={register}
              setValue={setValue}
              remove={remove}
              control={control}
            />
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: "appendBill", lastName: "appendLuo" });
          }}
        >
          append
        </button>
      </section>

      <p>watch: {watchResult}</p>
    </form>
  );
}

const Row = ({ item, index, register, setValue, remove, control }) => {
  useEffect(() => {
    register(`test[${index}].lastName`);
  });

  const handleLastNameChange = (event) => {
    setValue(`test[${index}].lastName`, event.currentTarget.value);
  };

  return (
    <React.Fragment key={item.id}>
      <li key={`listItem${index}`}>
        <input
          name={`test[${index}].firstName`}
          defaultValue={`${item.firstName}`} // make sure to set up defaultValue
          ref={register()}
        />
        <Controller
          name={`test[${index}].lastName`}
          control={control}
          defaultValue={item.lastName}
          render={(props) => {
            return <input {...props} onChange={handleLastNameChange} />;
          }}
        />

        <button type="button" onClick={() => remove(index)}>
          Delete
        </button>
      </li>
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
