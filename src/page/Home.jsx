import React from "react";
import Input from "../component/Input";
import Card from "../component/Card";
import { useSelector } from "react-redux";

function Home() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <Input />
      <h1>Working</h1>
      {todos.map((item) => {
        return item.isDone === false ? (
          <Card key={item.id} todo={item} />
        ) : null;
      })}

      <h1>Done</h1>
      <div>
        {todos.map((item) => {
          return item.isDone === true ? (
            <Card key={item.id} todo={item} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default Home;
