import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <li>aaa</li>
              <button className>完了</button>
              <button className>削除</button>
            </div>
            <div className="list-row">
              <li>aaa</li>
              <button className>完了</button>
              <button className>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <li>aaa</li>
              <button className>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
