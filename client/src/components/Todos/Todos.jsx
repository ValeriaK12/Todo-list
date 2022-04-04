import React, { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import { changeStatusTodo, removeTodo } from "../../redux/thunk/thunk";
import EditTodo from "../EditTodo/EditTodo";

const Todos = ({ title, status, createdAt, id }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const changeStatusHandler = (id) => {
    dispatch(changeStatusTodo(id, status));
  };

  const editButtonHandler = () => {
    setEdit((prev) => !prev);
  };
  return (
    <>
      {title && (
        <li className="list-group-item note">
          {edit ? (
            <EditTodo
              title={title}
              id={id}
              editButtonHandler={editButtonHandler}
              edit={edit}
              setEdit={setEdit}
            />
          ) : (
            <>
              {!edit && (
                <>
                  <input
                    className=" "
                    onClick={() => changeStatusHandler(id)}
                    type="checkbox"
                    checked={status}
                    value={status}
                    readOnly
                  />
                  <div className="content">
                    <strong className={status ? "done" : "todo-text"}>
                      {title}
                    </strong>
                  </div>
                  <div className="crud-btn">
                    <div
                      className={
                        status ? "done todo-text-date" : "todo-text-date"
                      }
                    >
                      {dayjs(createdAt).format("DD.MM.YYYY")}
                    </div>
                    <button
                      className="btn btn-outline-secondary btn-sm ml-3"
                      onClick={() => editButtonHandler()}
                    >
                      &#128394;
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm ml-3"
                      onClick={() => deleteHandler(id)}
                    >
                      &#128465;
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </li>
      )}
    </>
  );
};

export default React.memo(Todos);
