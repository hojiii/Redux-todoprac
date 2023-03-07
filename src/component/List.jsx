import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function List({ isDone }) {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h3>{isDone ? "Done" : "Working"}</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((item) => {
          return item.isDone === isDone && <Card key={item.id} todo={item} />;
        })}
      </div>
    </>
  );
}

export default List;
