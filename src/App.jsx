import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from "./componets/InputTodo";
import { IncompleteTodos } from "./componets/IncompleteTodos";
import { CompleteTodos } from "./componets/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [incompleteTodosCount, setIncompleteTodosCount] = useState([false]);

  console.log(incompleteTodos.length);
  const onChangeTodoText = (evet) => setTodoText(evet.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = listDelete(index, [...incompleteTodos]);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...completeTodos, incompleteTodos[index]];
    const newTodos = listDelete(index, [...incompleteTodos]);
    setIncompleteTodos(newTodos);
    setCompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (index) => {
    const newTodos = listDelete(index, [...completeTodos]);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newTodos);
  };

  const listDelete = (index, oldTodos) => {
    const newTodos = [...oldTodos];
    newTodos.splice(index, 1);
    return newTodos;
  };

  useEffect(() => {
    console.log();
    const newIncompleteTodos = [...incompleteTodos];
    if (newIncompleteTodos.length >= 5 && newIncompleteTodos.length !== 0) {
      alert("登録できるTODOは5個までです。");
      setIncompleteTodosCount(true);
      return incompleteTodosCount;
    } else {
      setIncompleteTodosCount(false);
      return incompleteTodosCount;
    }
  }, [incompleteTodos]);

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodosCount}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
