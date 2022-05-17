import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "iiiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuu"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button className>完了</button>
                  <button className>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button className>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
