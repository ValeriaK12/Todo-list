import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import Form from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import List from "../../components/List/List";
import { Loader } from "../../components/Loader/Loader";
import { getTodo } from "../../redux/thunk/thunk";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <Header />
      <Form />
      {!isEmpty(todos) ? <List /> : <Loader />}
    </div>
  );
};
export default React.memo(TodoList);
