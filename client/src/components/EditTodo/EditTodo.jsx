import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo } from "../../redux/thunk/thunk";

const EditTodo = ({ title, id, editButtonHandler, edit, setEdit }) => {
  const [value, setValue] = useState(title);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(editTodo(id, value));
    editButtonHandler(id);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container edit-field">
        <input
          className="form-control form-control-sm mr-3 edit-input "
          onChange={onChangeHandler}
          type="text"
          value={value}
        />
        <button className="btn btn-outline-secondary btn-sm" type="submit">
          &#10004;
        </button>
        <button
          className="btn btn-outline-secondary btn-sm ml-3"
          type="submit"
          onClick={setEdit(edit)}
        >
          &#10008;
        </button>
      </div>
    </form>
  );
};

export default React.memo(EditTodo);
