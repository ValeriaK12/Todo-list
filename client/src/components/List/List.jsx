import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { isEmpty } from "lodash";

import Todos from "../Todos/Todos";

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <TransitionGroup component="ul" className="list-group">
      {!isEmpty(todos) &&
        todos.map((todo, key) => (
          <CSSTransition key={todo._id || key} classNames={"note"} timeout={800}>
            <Todos
              title={todo.title}
              status={todo.status}
              createdAt={todo.createdAt}
              id={todo._id}
            />
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  );
};

export default React.memo(List);
