import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addTodo } from "../../redux/thunk/thunk";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group form">
          <input
            className="form-control"
            onChange={onChange}
            value={value}
            placeholder="Введи заметку"
            name="text"
            required
          />
          <button
            className="btn btn-outline-success ml-3 form-btn"
            type="submit"
          >
            Записать
          </button>
        </div>
      </form>
    </>
  );
};

export default React.memo(Form);
